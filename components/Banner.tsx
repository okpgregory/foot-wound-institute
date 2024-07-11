import MaxWidthWrapper from "./shared/MaxWidthWrapper"

export default function Banner() {
  return (
    <MaxWidthWrapper className="bg-primary text-background">
    <div className="container flex justify-between font-medium">
        <span>WE ARE MOBILE.</span>
        <span>SERVICES PROVIDED BETWEEN 24-48 HOURS AFTER REFERRAL.</span>
    </div>
    </MaxWidthWrapper>
  )
}
