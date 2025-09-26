"use client";

import Image from "next/image";
import im1 from "@/public/office-building-from-low-angle-view-5JP662U (1).png";
import { Button } from "../../ui/button";
import { FaArrowRight } from "react-icons/fa";
import general from "@/public/Shape.svg";
import project from "@/public/ruler.svg";
import refurb from "@/public/measuring-tool.svg";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";

export default function Hero() {
  return (
    <section className="relative w-full h-screen ">
      <div className="relative w-full h-[70vh] grid place-items-center">
        <Image
          src={im1}
          alt="Construction"
          fill
          className="object-cover"
          // priority
          loading="lazy"
        />
        <motion.div
          className="w-full flex-col flex items-center justify-start z-50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.p
              className="text-white text-5xl mb-3 font-bold"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Construction Solution{" "}
            </motion.p>
            <motion.p
              className="text-white text-5xl mb-3"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              for everyone
            </motion.p>
            <motion.p
              className="text-white max-w-xl mt-2 mb-5"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              We build spaces that last a lifetime—delivering quality
              construction, reliable project management, and innovative
              infrastructure solutions tailored to your needs.
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant={"default"}
                effect={"expandIcon"}
                icon={FaArrowRight}
                iconPlacement="right"
                className="bg-[#D2153D] cursor-pointer hover:bg-[#D2153D]"
                onClick={() => redirect("/services")}
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="w-auto h-auto flex flex-row justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.div
          className="flex items-start"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <motion.div
            className="py-8 px-5 bg-[#00215B] text-white flex-col flex"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-5xl font-semibold">147</span>
            <span>Completed Projects</span>
          </motion.div>
          <motion.div
            className="py-8 px-5 bg-[#D2153D] text-white flex-col flex"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-5xl font-semibold">25+</span>
            <span>Years of Experience</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-white py-5 rounded-lg max-w-sm px-10 shadow-gray-700 shadow-lg"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-[#00215B] text-xl mb-4 text-center text-light">
            We Construct and Manage Places and Infrastructures
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <motion.li
              className="flex items-center space-x-3"
              whileHover={{ x: 5 }}
            >
              <Image
                src={general}
                alt="General"
                width={40}
                height={40}
                loading="lazy"
              />
              <p>
                <span className="text-lg text-[#00215B]">General Contract</span>{" "}
                <br />
                We manage complete construction projects from planning to
                delivery.
              </p>
            </motion.li>
            <motion.li
              className="flex items-center space-x-3"
              whileHover={{ x: 5 }}
            >
              <Image
                src={project}
                alt="project"
                width={40}
                height={40}
                loading="lazy"
              />
              <p>
                <span className="text-lg text-[#00215B]">Project Planning</span>{" "}
                <br />
                We design clear strategies, set timelines, and allocate
                resources.
              </p>
            </motion.li>
            <motion.li
              className="flex items-center space-x-3"
              whileHover={{ x: 5 }}
            >
              <Image
                src={refurb}
                alt="Refurbish"
                width={40}
                height={40}
                loading="lazy"
              />
              <p>
                <span className="text-lg text-[#00215B]">Refurbishment</span>{" "}
                <br />
                We restore and upgrade spaces with modern design & durable
                solutions.
              </p>
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
