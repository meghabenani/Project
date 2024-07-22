export default function Nav() {
  return (
    <div>
      <nav className="flex xs:justify-between justify-start bg-violet-900 text-white p-1">
        <div className="text-lg font-bold mx-8 hover:cursor-pointer">iTask</div>

        <div className="flex xs:flex-row flex-col mx-8 ">
          <span className="mx-5 hover:cursor-pointer hover:font-bold">
            Home
          </span>
          <span className="hover:cursor-pointer hover:font-bold">
            Your tasks
          </span>
        </div>
      </nav>
    </div>
  );
}
