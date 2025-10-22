import { CheckCircle, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  "Free & Premium Coding Courses",
  "Structured DSA Sheets & Roadmaps",
  "Hands-on MERN & MEAN Projects",
  "Core CS Subjects Simplified",
  "Career-Oriented Learning Path",
  "Community Support (Discord/Telegram)",
];

function AboutClient() {
  return (
    <div className="pt-[120px] pb-10 px-6 md:px-16 bg-gray-50">
      {/* About Header */}
      <div className="text-center mb-15">
        <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About CodianHub
        </p>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          CodianHub is your ultimate guide to ace SDE interviews. Our mission is
          to make coding education accessible, structured, and impactful for
          every aspiring software engineer.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-center space-y-5">
        <div className="space-y-6">
          <p className="text-2xl font-semibold text-gray-800">Our Mission</p>
          <p className="text-gray-600">
            At CodianHub, we aim to bridge the gap between students and industry
            requirements by offering practical coding tutorials, detailed DSA
            sheets, full-stack roadmaps, and guidance on cracking tech
            interviews.
          </p>

          <p className="text-2xl font-semibold text-gray-800">Our Goal</p>
          <p className="text-gray-600">
            To empower students with the right resources, mentorship, and
            practice platforms so they can confidently secure placements in top
            companies and grow as software engineers.
          </p>
        </div>

        <div className="flex justify-center relative">
          <Image
            src="/images/aboutImg.png"
            alt="CodianHub illustration"
            className="w-2/3 max-w-md rounded-lg shadow"
            width={150}
            height={150}
            loading="lazy"
          />
        </div>
      </div>

      {/* Founder Section */}
      <div className="mt-24 max-w-4xl mx-auto text-center space-y-6">
        <p className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Meet the Founder
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full mb-4"></div>

        <p className="text-lg text-gray-700 leading-relaxed">
          Hi, I'm <span className="font-bold text-gray-900">Ravi Kumar</span>, a{" "}
          <strong>Full Stack Web Developer</strong> and passionate software
          engineer. I founded{" "}
          <span className="font-semibold text-purple-600">CodianHub</span> with
          the vision to provide structured, high-quality resources for{" "}
          <strong>DSA, system design, and full-stack development</strong>.
        </p>

        <div className="bg-white shadow-lg p-6 rounded-xl border-l-4 border-purple-500">
          <p className="italic text-gray-600">
            "I started just like many of you—struggling with coding, interviews,
            and roadmaps. CodianHub is my way of building the platform I wish I
            had when I began 🚀."
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <Link
            href="https://github.com/codianhub"
            target="_blank"
            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full shadow transition"
          >
            <Github size={22} className="text-gray-700" />
          </Link>
          <Link
            href="https://linkedin.com/in/ravi-kumar-codianhub"
            target="_blank"
            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full shadow transition"
          >
            <Linkedin size={22} className="text-blue-700" />
          </Link>
          <Link
            href="https://twitter.com/codianhub"
            target="_blank"
            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full shadow transition"
          >
            <Twitter size={22} className="text-sky-500" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-24">
        <p className="text-3xl font-bold text-center mb-8">Why Choose Us?</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <CheckCircle className="text-green-500" size={22} />
              <p className="text-gray-700 font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <p className="text-2xl font-semibold mb-4">
          Start Your Coding Journey Today 🚀
        </p>
        <p className="text-gray-600 mb-6">
          Explore tutorials, courses, and resources designed to make you an
          industry-ready developer.
        </p>
        <Link href="/courses">
          <button className="px-6 cursor-pointer py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow hover:scale-105 transition">
            Explore Courses
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AboutClient;
