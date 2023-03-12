import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/src/styles/Home.module.css";
import { useEffect, useState } from "react";
import EventSource from "eventsource";
import { fetchEventSource } from "@microsoft/fetch-event-source";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchEventSource(`/api/message`, {
        method: "POST",
        headers: {
          Accept: "text/event-stream",
        },
        // onopen(res) {
        //   if (res.ok && res.status === 200) {
        //     console.log("Connection made ", res);
        //   } else if (res.status >= 400 && res.status < 500 && res.status !== 429) {
        //     console.log("Client side error ", res);
        //   }
        // },
        onmessage(event) {
          console.log(event.data);
          const parsedData = JSON.parse(event.data);
          setMessages((data) => [...data, parsedData]);
        },
        onclose() {
          console.log("Connection closed by the server");
        },
        onerror(err) {
          console.log("There was an error from server", err);
        },
      });
    };
    fetchData();
  }, []);

  console.log(messages);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Message</h1>
      <div id="message">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </>
  );
}
