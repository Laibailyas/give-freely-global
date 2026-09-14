import { motion } from "motion/react";
import { useState } from "react";
import { Eye, Lock, Power, ShieldCheck, Wifi } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const CARDS = [
  {
    icon: Lock,
    title: "Never your personal data",
    body: "Dotis only forwards public web requests. Your files, messages, photos and browsing history are never read, stored or shared.",
  },
  {
    icon: Wifi,
    title: "Only the slice you spare",
    body: "A hard cap keeps Dotis on the leftovers of your connection. Streaming, calls and gaming always come first.",
  },
  {
    icon: Eye,
    title: "See every request",
    body: "A live activity log shows exactly how much bandwidth was shared and what it earned, down to the cent.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade vetting",
    body: "Traffic comes only from screened business clients under contract. Abusive traffic is blocked before it reaches you.",
  },
];

export function SecurityControl() {
  const [on, setOn] = useState(true);

  return (
    <section id="security" className="relative overflow-hidden bg-ink px-5 pb-16 pt-20 text-paper sm:px-6 sm:pb-24 sm:pt-28 md:pb-32 md:pt-44">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-flare/20 blur-[130px]"
        animate={{ opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-[1800px] grid-cols-1 items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease }}
          className="lg:sticky lg:top-28"
        >
          <span className="inline-block bg-flare px-6 py-2 font-stamp text-xs font-medium uppercase tracking-[0.32em] text-paper">
            Security &amp; control
          </span>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,8.6vw,5rem)] leading-[0.92]">
            You stay
            <br />
            <span className="text-flare">in charge</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-paper/70 md:text-lg">
            One switch turns sharing on or off. No background surprises, no hidden
            usage, nothing tied to who you are.
          </p>

          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-leaf/45 bg-moss/[0.22] p-4 sm:gap-5 sm:p-5">
            <button
              type="button"
              data-cursor-hover
              onClick={() => setOn((v) => !v)}
              aria-pressed={on}
              className={`relative h-11 w-20 shrink-0 rounded-full transition-colors duration-500 ${on ? "bg-flare" : "bg-paper/20"}`}
            >
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
                className={`absolute top-1.5 grid h-8 w-8 place-items-center rounded-full bg-paper ${on ? "right-1.5" : "left-1.5"}`}
              >
                <Power className={`h-4 w-4 ${on ? "text-flare" : "text-ink/50"}`} />
              </motion.span>
            </button>
            <div>
              <p className="font-medium">{on ? "Sharing is on" : "Sharing is paused"}</p>
              <p className="text-sm text-paper/55">
                {on ? "Earning quietly in the background." : "Nothing is being shared right now."}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 85 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.09, ease }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-leaf/40 bg-moss/[0.18] p-6 sm:p-7"
              >
                <span className="absolute inset-x-0 -bottom-24 h-32 bg-flare/25 blur-3xl transition-all duration-500 group-hover:-bottom-10" />
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-flare">
                  <Icon className="h-6 w-6 text-paper" />
                </span>
                <h3 className="relative mt-5 font-display text-xl uppercase leading-tight sm:text-2xl">{card.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-paper/65">{card.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease }}
        className="relative mx-auto mt-14 max-w-[1800px] border-t border-paper/15 pt-10 text-center sm:mt-20 sm:pt-12"
      >
        <p className="font-stamp text-[0.65rem] uppercase tracking-[0.35em] text-paper/55 sm:text-xs">
          Recognized as safe to use by
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
          <span className="flex items-center gap-2.5 text-paper/45 transition-colors duration-300 hover:text-paper/80" title="Avast">
            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden><path d="M12 1.5 21.5 12 12 22.5 2.5 12Zm0 5.2a5.3 5.3 0 1 0 0 10.6 5.3 5.3 0 0 0 0-10.6Zm0 2.1a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Z" /></svg>
            <span className="text-xl font-semibold tracking-tight sm:text-2xl">Avast</span>
          </span>
          <span className="flex items-center text-paper/45 transition-colors duration-300 hover:text-paper/80" title="Kaspersky">
            <span className="text-xl font-semibold tracking-tight sm:text-2xl">kaspersky</span>
          </span>
          <span className="flex items-center gap-2.5 text-paper/45 transition-colors duration-300 hover:text-paper/80" title="McAfee">
            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden><path d="M12 1.5 22 6v6c0 5.5-4.2 9.3-10 10.5C6.2 21.3 2 17.5 2 12V6Zm-1.2 5.2L5.4 12l3 3 1.6-1.6-1.4-1.4 2.2-2.2 3.4 3.4L12 15.4l-2.8 2.8 2.8 2.3 2.8-2.3L12 15.4l5-5Z" /></svg>
            <span className="text-xl font-semibold tracking-tight sm:text-2xl">McAfee</span>
          </span>
          <span className="flex items-center gap-2.5 text-paper/45 transition-colors duration-300 hover:text-paper/80" title="Microsoft Defender">
            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden><path d="M12 1.8 20.5 5v6c0 5.3-3.6 8.9-8.5 10.2C7.1 19.9 3.5 16.3 3.5 11V5Zm0 2.2v7h7V6.2Zm0 9H5.7c.6 3.1 3 5.3 6.3 6.2Zm1.5 2.4c3-.9 5.3-3 5.8-6.1H13.5Z" /></svg>
            <span className="text-xl font-semibold tracking-tight sm:text-2xl">
              Microsoft <span className="font-normal">Defender</span>
            </span>
          </span>
        </div>
        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-paper/55 sm:text-base">
          Self-hosted on our own infrastructure (no Amazon), open-source from top to bottom (no Google, no Apple).
          We do not support big tech or pay companies that stand against our values, so you download Dotis straight from us and anyone can inspect the code.
        </p>
      </motion.div>
    </section>
  );
}
