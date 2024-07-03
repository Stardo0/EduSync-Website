import {
      BellIcon,
      CalendarIcon,
      FileTextIcon,
      GlobeIcon,
      InputIcon,
    } from "@radix-ui/react-icons";
    
    import '../main.css'
    import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
    
    const features = [
      {
        Icon: FileTextIcon,
        name: "Work with Workshets",
        description: "Get costum worksheets for every subjects.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
      },
      {
        Icon: InputIcon,
        name: "Find every Subject",
        description: "Search through 1000+ of Subjects in seconds.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
      },
      {
        Icon: GlobeIcon,
        name: "Multilingual",
        description: "Supports 100+ languages",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
      },
      {
        Icon: CalendarIcon,
        name: "Planner",
        description: "Use the integrated planner to keep track of your schedule.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
      },
      {
        Icon: BellIcon,
        name: "Notifications",
        description:
          "Get notified when someone shares a file or mentions you in a comment.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
      },
    ];
    
    export default function BentoFeatures() {
      return (
      <div className="container">
            <div className="grid">
            <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
                  <BentoCard key={feature.name} {...feature} />
            ))}
            </BentoGrid>
            </div>
      </div>
      );
    }
    