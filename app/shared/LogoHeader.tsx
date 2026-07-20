import logo from "../assets/djardin_logo.svg?url";

export default function LogoHeader() {
  return (
    <div className="logo-header flex flex-row gap-2">
      <img src={logo} className="w-30 h-30" />
      <div className="flex flex-col gap-2 w-full justify-center">
        <h1>Djardin</h1>
        <h2>The best way to take care of your plants</h2>
      </div>
    </div>
  )
}
