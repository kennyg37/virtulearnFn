export default function Popular() {
  return (
    <article className="px-16 md:px-6 sm:px-3 grid grid-cols-3 my-20 gap-4 md:grid-cols-2 sm:grid-cols-1">
      <section className="col-span-2 sm:col-span-1 flex flex-col gap-6 justify-center">
        <p className="font-bold text-6xl">Most Popular Courses</p>
        <p>
          Dive into the latest and greatest! Our "Most Popular Courses" feature
          the trending topics everyone is talking about. Elevate your skills
          with the hottest picks on VirtuLearn. Stay in the know, stay ahead.
        </p>
      </section>
      <section className="flex flex-col gap-1">
        <img
          className="h-48 w-full object-cover rounded-xl"
          src="/course.jpg"
          alt=""
        />
        <p className="font-bold text-2xl">Mathematics for Machine learning</p>
        <p className="">Ken Ganza</p>
        <p className="font-bold text-lg">(+120 enrolled students)</p>
        <p className="font-bold">Free</p>
      </section>
      <section className="flex flex-col gap-1">
        <img
          className="h-48 w-full object-cover rounded-xl"
          src="/course2.jpg"
          alt=""
        />
        <p className="font-bold text-2xl">Principles of Quantum physics</p>
        <p className="">Albert Einstein</p>
        <p className="font-bold text-lg">(+147,000 enrolled students)</p>
        <p className="font-bold">$34.99</p>
      </section>
      <section className="flex flex-col gap-1">
        <img
          className="h-48 w-full object-cover rounded-xl"
          src="/course3.jpg"
          alt=""
        />
        <p className="font-bold text-2xl">Supervised Machine learning</p>
        <p className="">Ken Ganza</p>
        <p className="font-bold text-lg">(+50 enrolled students)</p>
        <p className="font-bold">$69</p>
      </section>
      <section className="flex flex-col gap-1">
        <img
          className="h-48 w-full object-cover rounded-xl"
          src="/course4.jpg"
          alt=""
        />
        <p className="font-bold text-2xl">Introduction to NextJs</p>
        <p className="">Ken Ganza</p>
        <p className="font-bold text-lg">(+1000 enrolled students)</p>
        <p className="font-bold">Free</p>
      </section>
    </article>
  );
}
