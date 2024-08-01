import PatientForm from "@/components/Form/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            alt="logo"
            className="mb-12 h-10 w-fit"
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
          ></Image>
          <PatientForm />
          <div className="flex text-14-regular mt-20 justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePlus
            </p>
            <Link className="text-green-500" href={"#"}>
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        alt="plogo"
        className="side-img max-w-[50%]"
        src="/assets/images/onboarding-img.png"
        width={1000}
        height={1000}
      ></Image>
    </div>
  );
}
