import Image from "next/image";
import banner from "@/assets/images/signin-banner.jpg";
import Button from "@/components/common/button";
import TextInput from "@/components/common/text-input";

export default function Signin() {
  return (
    <div className="flex h-screen w-full">
      {/* image */}
      <div className="w-2/5 relative">
        <Image
          alt="banner"
          src={banner}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient" />
      </div>

      {/* form */}
      <div className="grow flex justify-center items-center">
        <form className="max-w-md w-full flex flex-col gap-8">
          <div>
            <p className="text-2xl">
              Twitch is a <span className="text-twitch">live</span> streaming
              video plattform
            </p>
            <p className="text-2xl">Start your streaming today</p>
          </div>

          <div className="flex flex-col gap-2">
            <TextInput placeholder="Nombre de usuario" />
            <TextInput placeholder="Contraseña" />

            <span className="text-xs text-gray-300 mt-4">
              Al crear tu cuenta, estas indicando que aceptas los terminos de
              servicios y politicas de privacidad
            </span>
          </div>

          <Button label="Crear una Cuenta" />
        </form>
      </div>
    </div>
  );
}
