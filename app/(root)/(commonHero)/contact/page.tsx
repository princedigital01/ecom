import { Clock, Location, Phone } from "@/assets/icons";
import Button from "@/components/ui/Button";
export default function Contact() {

  return (
    <div className="contact">
      <div className="flex flex-col p-14">

        <div className="flex flex-col gap-3 justify-center text-center">
          <div className="text-3xl font-semibold text-c-text">Get In Touch With Us</div>
          <div className="text-sm font-thin text-c-title">For More Information About Our Product & Services. Please Feel Free To Drop Us <br />An Email. Our Staff....</div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start  gap-24 pt-24">
          <div className="gap-10 flex flex-col pt-6 md:w-[30%] lg:w-[20%] ">
            
            <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-start items-center md:items-start">
              <div className="flex h-full items-start justify-start">
                <Location />
              </div>
              <div className="text-sm">
                <div className="font-semibold text-xl">Address</div>
                490 University Drive suite 200 coral
                Gabies,
                Fl 33134 USA
              </div>
            </div>

             <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-start items-center md:items-start">
              <div className="flex h-full items-start justify-start">
                <Phone />
              </div>
              <div className="text-sm">
                <div className="font-semibold text-xl">Phone</div>
                490 University Drive suite 200 coral
                Gabies,
                Fl 33134 USA
              </div>
            </div>

             <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-start items-center md:items-start">
              <div className="flex h-full items-start justify-start">
                <Clock />
              </div>
              <div className="text-sm">
                <div className="font-semibold text-xl">Working Time</div>
                490 University Drive suite 200 coral
                Gabies,
                Fl 33134 USA
              </div>
            </div>
            

          </div>
          <div className="w-[70%] lg:w-1/2">
            <form className="gap-6 flex flex-col  text-sm  text-center md:text-start" action="">
              <div className="h1 text-c-title text-center lg:hidden">Feedback</div>

              <div className="gap-5 w-full flex flex-col">
                <div className="font-semibold text-c-text">Your Name</div>
                <input type="text"  className="border-2 border-grey-3 rounded-lg p-6 w-full" placeholder="eg:John"/>
              </div>

              <div className="gap-5 w-full flex flex-col">
                <div className="font-semibold text-c-text">Email Address</div>
                <input type="text"  className="border-2 border-grey-3 rounded-lg p-6 w-full" placeholder="email@email.com"/>
              </div>

              <div className="gap-3 w-full flex flex-col">
                <div className="font-semibold text-c-text">Subject</div>
                <input type="text"  className="border-2 border-grey-3 rounded-lg p-6 w-full" placeholder="optional."/>
              </div>

              <div className="gap-3 w-full flex flex-col">
                <div className="font-semibold text-c-text">Message</div>
                <textarea  rows={6}  className="border-2 border-grey-3 rounded-lg p-6 w-full" placeholder="message...."/>
              </div>
              <Button className={"w-52 h-12 rounded-md"}>submit</Button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
