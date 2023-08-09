import { PrimaryButton } from "../shared/components/Button/PrimaryButton";
import { Heading } from "../shared/components/Heading/Heading";
import { Input } from "../shared/components/Input/Input";
import { TextArea } from "../shared/components/Input/TextArea";

export const ContactUs = () => {
  return (
    <section className="w-full lg:p-24 p-8 pt-16">
      <Heading as="h2">Want to start a project?</Heading>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="lg:text-xl text-lg">
          <p>
            Whether you're a visionary entrepreneur, an established business, or
            anyone in between, we're excited to collaborate and bring your
            digital aspirations to life.
          </p>

          <p className="mt-4">
            Let's connect, discuss, and create something amazing together! Your
            journey to digital excellence starts here.
          </p>
        </div>

        <form
          className="flex flex-col gap-6"
          action="https://formsubmit.co/983efe2e3085464cc46df044ce306028"
          method="POST"
        >
          <Input type="text" name="name" placeholder="Your name" required>
            Name
          </Input>

          <Input
            type="text"
            name="company"
            placeholder="Your company name"
            required
          >
            Company
          </Input>

          <Input
            type="email"
            name="email"
            placeholder="your.name@company.com"
            required
          >
            Email
          </Input>

          <TextArea name="message" placeholder="What's on your mind?" required>
            Message
          </TextArea>

          <PrimaryButton className="self-start" type="submit">Send Message</PrimaryButton>
        </form>
      </div>
    </section>
  );
};
