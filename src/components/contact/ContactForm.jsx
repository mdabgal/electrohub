import {
  FiUser,
  FiMail,
  FiEdit,
  FiMessageSquare,
  FiSend,
} from "react-icons/fi";

export default function ContactForm() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900">

      <h2 className="text-3xl font-black text-slate-900 dark:text-white">
        Send Us A Message
      </h2>

      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form className="mt-8 space-y-6">

       
        <div>
          <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300">
            <FiUser />
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-violet-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>

      
        <div>
          <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300">
            <FiMail />
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-violet-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>

        
        <div>
          <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300">
            <FiEdit />
            Subject
          </label>

          <input
            type="text"
            placeholder="Enter subject"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-violet-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>

     
        <div>
          <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300">
            <FiMessageSquare />
            Message
          </label>
<textarea
  rows={6}
  placeholder="Write your message..."
  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition resize-none focus:border-violet-600 focus:ring-2 focus:ring-violet-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
></textarea>
        </div>

        
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-violet-600 px-6 py-4 font-bold text-white transition hover:bg-violet-700"
        >
          <FiSend />
          Send Message
        </button>

      </form>
    </div>
  );
}