"use client"
import { useState } from "react";

const dsaTopics = [
  {
    title: "Arrays & Strings",
    questions: [
      "Two Sum",
      "Best Time to Buy and Sell Stock",
      "Maximum Subarray",
      "Product of Array Except Self",
      "Set Matrix Zeroes",
      "Rotate Image",
      "Longest Substring Without Repeating Characters",
      "Longest Palindromic Substring",
      "Container With Most Water",
      "3Sum",
      "Group Anagrams",
      "Longest Common Prefix",
      "Valid Anagram",
      "Minimum Window Substring",
      "Sliding Window Maximum",
      "Find All Anagrams in a String",
      "String to Integer",
      "Integer to Roman",
      "Roman to Integer",
      "Zigzag Conversion",
      "Generate Parentheses",
      "Multiply Strings",
      "Valid Palindrome",
      "Reverse Words in a String",
      "Word Break",
    ],
  },
  {
    title: "Searching & Sorting",
    questions: [
      "Binary Search",
      "Search in Rotated Sorted Array",
      "Find First and Last Position",
      "Median of Two Sorted Arrays",
      "Merge Intervals",
      "Meeting Rooms",
      "Insert Interval",
      "Sort Colors",
      "Find Peak Element",
      "Kth Largest Element in an Array",
      "Top K Frequent Elements",
      "Merge Sorted Array",
      "H-Index",
      "Search a 2D Matrix",
      "Find Minimum in Rotated Sorted Array",
      "Search a 2D Matrix II",
      "First Missing Positive",
      "Largest Number",
      "Wiggle Sort II",
      "Russian Doll Envelopes",
    ],
  },
  {
    title: "Linked List",
    questions: [
      "Reverse Linked List",
      "Merge Two Sorted Lists",
      "Detect Cycle in Linked List",
      "Add Two Numbers",
      "LRU Cache",
      "Remove Nth Node From End of List",
      "Palindrome Linked List",
      "Intersection of Two Linked Lists",
      "Copy List with Random Pointer",
      "Rotate List",
      "Flatten a Multilevel Doubly Linked List",
      "Partition List",
      "Reorder List",
      "Sort List",
      "Reverse Nodes in k-Group",
      "Swap Nodes in Pairs",
    ],
  },
  {
    title: "Stacks & Queues",
    questions: [
      "Valid Parentheses",
      "Min Stack",
      "Implement Queue using Stacks",
      "Daily Temperatures",
      "Evaluate Reverse Polish Notation",
      "Largest Rectangle in Histogram",
      "Sliding Window Maximum",
      "Decode String",
      "Remove K Digits",
      "Simplify Path",
      "Basic Calculator",
      "Asteroid Collision",
      "Next Greater Element",
      "Monotonic Stack Problems",
    ],
  },
  {
    title: "Recursion & Backtracking",
    questions: [
      "Subsets",
      "Combination Sum",
      "Word Search",
      "N-Queens",
      "Sudoku Solver",
      "Letter Combinations of a Phone Number",
      "Permutations",
      "Combinations",
      "Generate Parentheses",
      "Palindrome Partitioning",
      "Restore IP Addresses",
      "Word Ladder",
      "Word Ladder II",
    ],
  },
  {
    title: "Trees & Graphs",
    questions: [
      "Maximum Depth of Binary Tree",
      "Validate Binary Search Tree",
      "Binary Tree Level Order Traversal",
      "Lowest Common Ancestor",
      "Number of Islands",
      "Clone Graph",
      "Course Schedule",
      "Course Schedule II",
      "Word Ladder",
      "Surrounded Regions",
      "Rotting Oranges",
      "Pacific Atlantic Water Flow",
      "Accounts Merge",
      "Binary Tree Inorder Traversal",
      "Binary Tree Preorder Traversal",
      "Binary Tree Postorder Traversal",
      "Construct Binary Tree from Preorder and Inorder",
      "Serialize and Deserialize Binary Tree",
      "Binary Tree Maximum Path Sum",
      "Path Sum",
      "Path Sum II",
    ],
  },
  {
    title: "Dynamic Programming",
    questions: [
      "Climbing Stairs",
      "House Robber",
      "House Robber II",
      "Coin Change",
      "Longest Increasing Subsequence",
      "Word Break",
      "Edit Distance",
      "Unique Paths",
      "Unique Paths II",
      "Minimum Path Sum",
      "Maximal Square",
      "Longest Palindromic Subsequence",
      "Regular Expression Matching",
      "Wildcard Matching",
      "Interleaving String",
      "Burst Balloons",
      "Palindrome Partitioning II",
      "Scramble String",
      "Longest Valid Parentheses",
    ],
  },
  {
    title: "Advanced/Hard",
    questions: [
      "Trapping Rain Water",
      "Sliding Window Maximum",
      "Median Sliding Window",
      "LFU Cache",
      "Minimum Window Substring",
      "Shortest Palindrome",
      "Word Ladder II",
      "Alien Dictionary",
      "Largest Rectangle in Histogram",
      "Maximal Rectangle",
      "Candy",
      "First Missing Positive",
      "Sudoku Solver",
      "Strongly Connected Components",
      "Critical Connections in a Network",
      "Word Search II",
      "Regex Matching",
      "Wildcard Matching",
    ],
  },
];

export default function DSASheet() {
  const [selectedTopic, setSelectedTopic] = useState("All");

  const topics = ["All", ...dsaTopics.map((t) => t.title)];

  const filteredTopics =
    selectedTopic === "All"
      ? dsaTopics
      : dsaTopics.filter((t) => t.title === selectedTopic);

  return (
    <div className="my-30 max-w-4xl mx-auto p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border">
      <p className="text-4xl font-extrabold text-center mb-8 text-blue-700">
        CodianHub DSA Sheet
      </p>

      {/* Filter Dropdown */}
      <div className="mb-8 flex justify-center">
        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {topics.map((topic, i) => (
            <option key={i} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      {/* Questions List */}
      {filteredTopics.map((topic, index) => (
        <div
          key={index}
          className="mb-10 p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-200"
        >
          <p className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
            {topic.title}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {topic.questions.map((q, i) => (
              <li key={i} className="hover:text-blue-600 transition duration-150">
                {q}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}