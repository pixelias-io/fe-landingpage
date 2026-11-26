import { FormEvent, useEffect, useRef, useState } from 'react'
import type { Locale } from './Locale'
type FieldName = 'name' | 'email' | 'message'
type Errors = Partial<Record<FieldName, string>>
const messages: Record<Locale, Record<FieldName, string>> = {
  en: {
    name: 'Please enter your name.',
    email: 'Please enter a valid email address.',
    message: 'Please tell us about your project.'
  },
  pt: {
    name: 'Informe seu nome.',
    email: 'Informe um endereço de e-mail válido.',
    message: 'Conte um pouco sobre seu projeto.'
  }
}
export function useContactForm(locale: Locale) {
  const formRef = useRef<HTMLFormElement>(null)
  const [invalid, setInvalid] = useState<Partial<Record<FieldName, boolean>>>({})
  useEffect(() => {
    if (formRef.current) formRef.current.noValidate = true
  }, [])
  const errors: Errors = {}
  ;(Object.keys(invalid) as FieldName[]).forEach((name) => {
    if (invalid[name]) errors[name] = messages[locale][name]
  })
  function validate(field: HTMLInputElement | HTMLTextAreaElement) {
    const name = field.name as FieldName
    setInvalid((previous) => ({ ...previous, [name]: !field.validity.valid }))
  }
  function handleBlur(event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const field = event.currentTarget
    if (field.value || invalid[field.name as FieldName]) validate(field)
  }
  function handleInput(event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (invalid[event.currentTarget.name as FieldName]) validate(event.currentTarget)
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (!endpoint) {
      event.preventDefault()
      return
    }
    const fields = Array.from(
      event.currentTarget.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[required]')
    )
    const bad = fields.filter((field) => !field.validity.valid)
    setInvalid(Object.fromEntries(fields.map((field) => [field.name, !field.validity.valid])))
    if (bad.length) {
      event.preventDefault()
      bad[0].focus()
    }
  }
  const endpoint = process.env.NEXT_PUBLIC_FORM_SUBMIT_TOKEN
  return {
    formRef,
    formAction: endpoint ? `https://formsubmit.co/${endpoint}` : undefined,
    errors,
    handleBlur,
    handleInput,
    handleSubmit
  }
}
