import { ReactNode } from "react";

interface UIComponent {
  children: ReactNode;
}

const Paragraph = ({ children }: UIComponent) => {
  return <p className="max-w-[85%] text-lg">{children}</p>;
};

const Heading = ({ children }: UIComponent) => {
  return <h2 className="text-3xl font-semibold capitalize">{children}</h2>;
};

export default function page() {
  return (
    <div className="space-y-20">
      <section className="mx-auto container space-y-10">
        <div className="space-y-4">
          <Heading>Why is this project important?</Heading>
          <Paragraph>
            In today's world, cleanliness and environmental sustainability are
            critical for fostering a healthy and green future. The Dashboard for
            Swachhta and LiFE is designed to tackle these challenges by
            leveraging AI-powered image processing technology. This tool
            provides a comprehensive solution for monitoring cleanliness and
            green practices in post offices, ensuring that standards are not
            just set but consistently maintained.
          </Paragraph>
          <Paragraph>
            By offering real-time surveillance and automated alerts for any
            deviations, this project helps Divisional Offices intervene swiftly,
            guiding post offices to adhere to Swachhta and Green Growth
            protocols. It encourages accountability and supports India's larger
            mission of sustainable development through active maintenance of
            cleanliness and eco-friendly practices. This project is a crucial
            step toward a cleaner, greener, and more responsible future.
          </Paragraph>
        </div>

        <div className="space-y-4">
          <Heading>Institutionalizing Swachhta Protocols</Heading>
          <Paragraph>
            The Department of Posts has made significant progress in the past
            decade with Swachhta Abhiyaan, and now seeks to institutionalize
            these efforts across its vast network. This project plays a pivotal
            role in embedding cleanliness standards and green practices into
            daily operations, ensuring long-term sustainability.
          </Paragraph>
        </div>

        <div className="space-y-4">
          <Heading>AI-Powered Monitoring for Accountability</Heading>
          <Paragraph>
            By integrating AI-powered image processing, the project offers a
            modern solution for real-time monitoring of cleanliness protocols.
            It ensures that deviations from the Swachhta standards are promptly
            detected, allowing for immediate corrective action, thus maintaining
            accountability across post offices.
          </Paragraph>
        </div>
      </section>
      <section className="bg-green-500 text-white py-10">
        <div className="container mx-auto space-y-10">
          <div className="space-y-4">
            <Heading>What technologies are used?</Heading>
            <Paragraph>
              For AI-powered image detection, we use OpenCV and TensorFlow.
              OpenCV provides robust tools for image processing, enabling our
              system to efficiently detect garbage in various environments
              through real-time data analysis. TensorFlow, a leading deep
              learning framework, powers our machine learning models, allowing
              the dashboard to accurately identify deviations from Swachhta and
              LiFE standards based on visual data, continuously improving
              through training.
            </Paragraph>
            <Paragraph>
              On the backend, we rely on Node.js, a fast and scalable runtime
              environment, to manage data flow and ensure seamless communication
              between the AI models and the user interface. This ensures the
              dashboard can handle large volumes of image data while maintaining
              performance and responsiveness.
            </Paragraph>
            <Paragraph>
              By combining these powerful technologies, we are able to deliver a
              cutting-edge, AI-driven solution that helps post offices maintain
              cleanliness and sustainable practices, all while providing the
              Divisional Offices with real-time monitoring and intervention
              capabilities.
            </Paragraph>
          </div>
        </div>
      </section>

      <section>
        <Heading>Team members</Heading>
      </section>
    </div>
  );
}
