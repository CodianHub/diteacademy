"use client"
import { useState } from "react";

const coreSubjects = [
  {
    title: "Operating System (OS)",
    content: [
      "Process Management: Scheduling, Deadlocks, Inter-process Communication",
      "Memory Management: Paging, Segmentation, Virtual Memory",
      "File Systems and I/O Management",
      "Threads and Concurrency",
      "OS Concepts asked in interviews (e.g., Semaphores, Paging vs Segmentation, Thrashing)",
    ],
  },
  {
    title: "Database Management System (DBMS)",
    content: [
      "ER Model, Normalization (1NF, 2NF, 3NF, BCNF)",
      "SQL Queries, Joins, Subqueries, Transactions",
      "ACID Properties & Concurrency Control",
      "Indexing, B+ Trees, Hashing",
      "Differences: SQL vs NoSQL, DBMS vs RDBMS",
    ],
  },
  {
    title: "Computer Networks",
    content: [
      "OSI & TCP/IP Models",
      "IP Addressing, Subnetting, Routing",
      "TCP vs UDP, DNS, DHCP, ARP, HTTP/HTTPS",
      "Network Security Basics (Firewalls, SSL/TLS, Encryption)",
      "Important Interview Qs: How internet works, 3-way Handshake",
    ],
  },
  {
    title: "Object Oriented Programming (OOPS)",
    content: [
      "4 Pillars: Encapsulation, Inheritance, Polymorphism, Abstraction",
      "Class vs Object, Constructor vs Destructor",
      "Overloading vs Overriding",
      "Interfaces & Abstract Classes",
      "Design Patterns (Singleton, Factory, Observer)",
    ],
  },
  {
    title: "System Design (Basics)",
    content: [
      "Scalability, Load Balancing, Caching",
      "Database Sharding, Replication",
      "Message Queues, CAP Theorem",
      "Designing Scalable Systems (URL Shortener, Social Media Feed, Chat App)",
      "High-level vs Low-level design",
    ],
  },
  {
    title: "Compiler Design",
    content: [
      "Phases of Compiler: Lexical, Syntax, Semantic Analysis",
      "Intermediate Code Generation",
      "Code Optimization",
      "Parsers (LL, LR parsing)",
      "Symbol Tables and Lexical Analysis",
    ],
  },
  {
    title: "Software Engineering",
    content: [
      "SDLC Models (Agile, Waterfall, Spiral)",
      "Software Testing (Unit, Integration, System, Acceptance)",
      "Version Control Systems (Git, GitHub)",
      "Requirement Analysis, UML Diagrams",
      "CI/CD and DevOps Basics",
    ],
  },
];

export default function CoreSubjects() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-5xl my-30 mx-auto p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg">
      <p className="text-4xl font-extrabold text-center text-blue-700 mb-10">
        Core Subjects for Cracking MAANG Companies
      </p>

      {coreSubjects.map((subject, index) => (
        <div
          key={index}
          className="mb-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition duration-200"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left p-5 font-semibold text-lg flex justify-between items-center"
          >
            {subject.title}
            <span className="text-gray-500">
              {openIndex === index ? "▲" : "▼"}
            </span>
          </button>

          {openIndex === index && (
            <div className="p-5 border-t bg-gray-50 rounded-b-xl">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {subject.content.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
