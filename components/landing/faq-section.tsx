"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    section: "General",
    qa: [
      {
        question: "What is EduSync?",
        answer: (
          <span>
            EduSync is a learning platform that provides a wide range of explanations and resources to help students and teachers learn. We also offer a variety of online courses to support students in their learning journey. If you still don't understand the subject, you can book a tutor.
          </span>
        ),
      },
      {
        question: "How can I use EduSync?",
        answer: (
          <span>
            To use EduSync, you can simply login and start learning. The entire app runs on the web.
          </span>
        ),
      },
    ],
  },
  {
    section: "Pricing",
    qa: [
      {
        question: "How mutch does it cost to use EduSync?",
        answer: (
          <span>
            EduSync is a completely free tool to use. No payment is required to use the software. Each tutor has their own rates, and you can choose which tutor you prefer.
          </span>
        ),
      },
    ],
  },
  {
    section: "Support",
    qa: [
      {
        question: "How can i contact the support team?",
        answer: (
          <span>
            You can contact the support team through the contact form on the website.
          </span>
        ),
      },
    ],
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mt-20">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
              FAQs
            </h4>
            <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
              Need help with something? Here are some of the most common
              questions we get.
            </p>
          </div>
          <div className="container mx-auto my-12 max-w-[600px] space-y-12">
            {faqs.map((faq, idx) => (
              <section key={idx} id={"faq-" + faq.section}>
                <h2 className="mb-4 text-left text-base font-semibold tracking-tight text-foreground/60">
                  {faq.section}
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col items-center justify-center"
                >
                  {faq.qa.map((faq, idx) => (
                    <AccordionItem
                      key={idx}
                      value={faq.question}
                      className="w-full max-w-[600px]"
                    >
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
