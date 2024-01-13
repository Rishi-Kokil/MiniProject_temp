
import styles from "../../style"
// Remembering Love, Sharing Hope : Together Against Alzheimer's.
// Harnessing the Power of Early Diagnosis
import Button from "../../components/button/Button"

const Hero = () => {


  return (
    <section id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        {/* <div className={`flex flex-row items-center py-[6px] rounded-[10px] mb-2`}>
          <span className={`${styles.paragraph} ml-2 `}>Welcome User</span>
        </div> */}

        
        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="flex-1 font-ppoppins font-semibold ss:text-[72px] text-[52px] text-gray-900 ss:leading-[100px] leading-[75px]">
            Remembering Love,
            <br className="sm:block hidden" />{" "}
            Sharing Hope : <br className="sm:block hidden" />{" "}
            <span className=" text-cyan-700"> Together Against Alzheimer's.</span>
          </h1>
        </div>
        <Button text={`Get Started`} />

      </div>

    </section>
  )
}

export default Hero