import React from "react";
import { seriesInfo, sessions, earlierPresenters } from "@/app/data/hiwg";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Format from the ISO parts. Passing a date-only string to `new Date()` parses
// it as UTC midnight, which renders the previous day in Pacific time.
function formatDate(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  const weekday = WEEKDAYS[new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
  return `${weekday}, ${MONTHS[month - 1]} ${day}, ${year}`;
}

const linkClass =
  "text-blue-600 hover:text-blue-800 transition-colors duration-200";

// Registration links deliberately do NOT appear here. Following EIP, the
// schedule is informational and the Zoom registration link is distributed in
// the Mailchimp announcement email only. seriesInfo.registerUrl holds the
// canonical link for those emails.
function SessionEntry({ session }) {
  const {
    number,
    date,
    time,
    speaker,
    affiliation,
    profileUrl,
    title,
    topic,
    coauthors,
    abstract,
    note,
    links,
  } = session;

  return (
    <li className="border-l-2 border-gray-200 pl-4 py-1">
      <p className="text-sm text-gray-500">
        {`Chat #${number}`}
        <span className="mx-2 text-gray-300">|</span>
        {formatDate(date)}
        <span className="mx-2 text-gray-300">|</span>
        {time}
      </p>

      <p className="mt-1">
        <span className="font-semibold text-gray-900">
          {profileUrl ? (
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {speaker}
            </a>
          ) : (
            speaker
          )}
        </span>
        {affiliation && (
          <span className="text-gray-600">{` (${affiliation})`}</span>
        )}
      </p>

      {title && <p className="mt-1 text-gray-900 italic">{`"${title}"`}</p>}
      {!title && topic && <p className="mt-1 text-gray-900">{topic}</p>}

      {coauthors && coauthors.length > 0 && (
        <p className="mt-1 text-sm text-gray-600">{`with ${coauthors.join(", ")}`}</p>
      )}

      {note && <p className="mt-1 text-sm text-gray-500 italic">{note}</p>}

      {abstract && (
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">{abstract}</p>
      )}

      {links && links.length > 0 && (
        <p className="mt-2 space-x-4 text-sm">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {link.label}
            </a>
          ))}
        </p>
      )}
    </li>
  );
}

const HIWGPreview = () => {
  // Evaluated at build time. A session moves to the archive on the next deploy,
  // which in practice is when the next chat is added to src/app/data/hiwg.js.
  const today = new Date().toISOString().slice(0, 10);

  const upcoming = sessions
    .filter((s) => s.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));

  const past = sessions
    .filter((s) => s.date < today)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-4xl mx-auto px-6 py-8">
        <section className="mt-8">
          <h1 className="text-3xl font-bold mb-4">{seriesInfo.name}</h1>
          <p className="text-gray-800 leading-relaxed">
            {seriesInfo.description}
          </p>

          {seriesInfo.mailingListUrl && (
            <p className="mt-4">
              <a
                href={seriesInfo.mailingListUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-blue-600 px-4 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                Join the mailing list
              </a>
            </p>
          )}

          <p className="mt-4 text-gray-800">
            If you have a working paper that you would like to present at our
            research chat, please don&rsquo;t hesitate to reach out to me at{" "}
            <a href={`mailto:${seriesInfo.contactEmail}`} className={linkClass}>
              {seriesInfo.contactEmail}
            </a>
            .
          </p>
        </section>

        {upcoming.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Chats</h2>
            <ul className="space-y-6">
              {upcoming.map((session) => (
                <SessionEntry key={session.number} session={session} />
              ))}
            </ul>
          </section>
        )}

        {past.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Past Chats</h2>
            <ul className="space-y-6">
              {past.map((session) => (
                <SessionEntry key={session.number} session={session} />
              ))}
            </ul>
          </section>
        )}

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold">Earlier Presenters</h2>
          <p className="mt-1 text-sm text-gray-600">
            Presenters from before July 2024, listed without dates.
          </p>
          <ul className="list-disc list-outside pl-6 mt-3 space-y-1">
            {earlierPresenters.map((presenter) => (
              <li key={presenter.name}>
                {presenter.name}
                {presenter.affiliation && (
                  <span className="text-gray-600">{` (${presenter.affiliation})`}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HIWGPreview;
