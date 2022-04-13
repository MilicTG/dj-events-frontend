import React from "react";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";

function EventsPage({ events }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.lenght === 0 && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} event={evt} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();

  return {
    props: { events },
  };
}

export default EventsPage;
