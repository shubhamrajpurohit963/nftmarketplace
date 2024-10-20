export default function HowItWorkCard({ title, description }) {
  return (
    <div className=" relative py-6 bg-[#3b3b3b] rounded-2xl flex flex-row md:flex-col items-center justify-between p-4">
      <img
        className="rounded-full w-1/3 h-2/3 md:h-60 md:w-60 mb-4"
        src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon-3@2x.svg"
      />
      <div className="flex w-2/3 flex-col items-center justify-start md:justify-center md:text-center md:w-full md:p-3 space-x-2 space-y-5 ">
        <p className="text-md md:text-xl font-bold">{title}</p>
        <p className="text-xs md:text-md">{description}</p>
      </div>
    </div>
  );
}
