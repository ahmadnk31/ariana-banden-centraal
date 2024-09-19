import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

import { ArrowDown, ArrowLeftRight, ArrowUpRight, ChevronDown,  Crown, Mail, PhoneCall, Recycle, Send } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaFacebook, FaWhatsapp } from "react-icons/fa"
import Link from "next/link"
import { BiWorld } from "react-icons/bi"
import { InfoCircledIcon, StarFilledIcon } from "@radix-ui/react-icons"
import { FeaturesSection } from "@/components/features"
import ExportWorldwide from "@/components/export-import"


export default function Component() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/landing.jpg"
          alt="Car at night"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-blend-overlay bg-black/50">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Welcome to Ariana Banden Centraal
          </h1>
          <p className="text-lg md:text-lg mb-6">
            Your reliable partner for used tire disposal and tire service
          </p>
          <Button asChild variant="destructive" size='lg' className="animate-pulse">
            <Link href="#services" className="flex gap-2 items-center group">
              Learn more <ArrowDown className="ml-2 h-4 w-4 group-hover:mt-1 transition animate-bounce" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-7-xl mx-auto px-4 md:px-8 my-24 min-h-screen" id='services'>
        <h2 className="text-4xl font-semibold text-center">Our services</h2>
        <p className="text-center text-lg mt-2 text-gray-300">From disposal to tire service - We make it easy!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 ">
        <Card className="flex flex-col md:flex-row md:items-start md:gap-0 pt-6 bg-gray-800">
         <CardHeader className="pt-0 pr-0">
         <ArrowLeftRight className="w-12 h-12 text-white bg-destructive rounded p-2" />
          </CardHeader>
          <CardContent className="flex flex-col items-start">
            <CardTitle className="text-lg md:text-xl font-bold text-white">
            Sale of New Tires
            </CardTitle>
            <CardDescription className="text-base md:text-lg text-gray-300 mb-4">
              We offer a wide range of quality-tested new tires for cars, trucks, and motorcycles. We only sell premium brands with fresh DOT.
            </CardDescription>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <Button variant="destructive" className=" bg-black hover:bg-black/90">
              Contact us <Send className="ml-2 h-4 w-4" />
            </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="tel:+32467662197" className="flex items-center" target="_blank">
                    <PhoneCall className="mr-2 h-4 w-4" />
                   Call us
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem >
                  <a href="mailto:Amirjan.nikzad2020@gmail.com" className="flex items-center" target="_blank">
                    <Mail className="mr-2 h-4 w-4" />
                    Email us
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://wa.me/0032467662197" className="flex items-center" target="_blank">
                    <FaWhatsapp className="mr-2 h-4 w-4" />
                    Whatsapp
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardContent>
        </Card>
        <Card className="flex flex-col md:flex-row md:items-start md:gap-0 pt-6 bg-gray-800">
         <CardHeader className="pt-0 pr-0">
         <Crown className="size-12 text-white bg-destructive rounded p-2" />
          </CardHeader>
          <CardContent className="flex flex-col items-start">
            <CardTitle className="text-lg md:text-xl font-bold text-white">
            Sale of Used Premium Tires
            </CardTitle>
            <CardDescription className="text-base md:text-lg text-gray-300 mb-4">
              We offer a wide range of quality-tested used tires for cars, trucks, and motorcycles. We only sell premium brands with fresh DOT.
            </CardDescription>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <Button variant="destructive" className=" bg-black hover:bg-black/90 text-ellipsis text-nowrap">
             Inquire Premium second hand Typres <Send className="ml-2 h-4 w-4" />
            </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="tel:+32467662197" className="flex items-center" target="_blank">
                    <PhoneCall className="mr-2 h-4 w-4" />
                   Call us
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem >
                  <a href="mailto:Amirjan.nikzad2020@gmail.com" className="flex items-center" target="_blank">
                    <Mail className="mr-2 h-4 w-4" />
                    Email us
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://wa.me/0032467662197" className="flex items-center" target="_blank">
                    <FaWhatsapp className="mr-2 h-4 w-4" />
                    Whatsapp
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardContent>
        </Card>
        <Card className="flex flex-col md:flex-row md:gap-0 items-start pt-6 bg-gray-800">
         <CardHeader className="pt-0 pr-0">
         <Recycle className="w-12 h-12 text-white bg-destructive rounded p-2" />
          </CardHeader>
          <CardContent className="flex flex-col items-start">
            <CardTitle className="text-xl font-bold text-white">
            Free Used Tire Disposal for Businesses
            </CardTitle>
            <CardDescription className="text-lg text-gray-300 mb-4">
              We take care of the professional disposal of your used tires. We offer a free disposal service for businesses.
            </CardDescription>
           <Button variant="destructive" className=" bg-black hover:bg-black/90">
             <Link href="#used-tyre-disposal" className="flex gap-2 items-center group">
             More info <ChevronDown className="ml-2 h-4 w-4 group-hover:mt-1 transition" />
              </Link>
              </Button>
          </CardContent>
        </Card>
        <Card className="flex flex-col md:flex-row md:gap-0 items-start pt-6 bg-gray-800">
         <CardHeader className="pt-0 pr-0">
         <BiWorld className="w-12 h-12 text-white bg-destructive rounded p-2" />
          </CardHeader>
          <CardContent className="flex flex-col items-start">
            <CardTitle className="text-xl font-bold text-white">
            Wholesale & Export
            </CardTitle>
            <CardDescription className="text-lg text-gray-300 mb-4">
              We export used tires worldwide. We offer a wide range of quality-tested used tires for cars, trucks, and motorcycles.
              .</CardDescription>
           <Button variant="destructive" className=" bg-black hover:bg-black/90">
             <Link href="#export" className="flex gap-2 items-center group">
             More info <ChevronDown className="ml-2 h-4 w-4 group-hover:mt-1 transition" />
              </Link>
              </Button>
          </CardContent>
        </Card>
        
      </div>
      </section>

      {/* Company History */}
      <section className="bg-gray-800 py-12 px-4 min-h-screen flex items-center" id="about-us">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-300">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground text-center mt-2 text-gray-400 leading-[2]">
          Our journey began in 2017 with a bold step into self-employment, starting from a modest double garage. Thanks to close cooperation with our valued partners – including car dealerships, tire distribution companies, workshops, and government agencies – we quickly became one of the leading used tire exporters in all of Germany. We owe this success to your trust and support. Thank you very much! Your dedicated Reifen-Gentile team.
          </p>
        </div>
      </section>

      {/* Tire Disposal Process */}
      <section className="py-24 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center" id='used-tyre-disposal'>
          Free Used Tire Disposal - How it works
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <Card 
          className="bg-black/80 bg-center bg-blend-overlay bg-cover flex-1"
          style={{
            backgroundImage: "url('/car.jpg')",
          }}>
            <CardHeader>
              <CardTitle className="text-2xl md:text-4xl text-white">Fast & Reliable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base md:text-lg text-gray-300">
              With our lightning-fast service, you get the desired tires in the shortest possible time - for smooth vehicle operation without long waiting times.
              </p>
              <p className="text-base md:text-lg mt-4 text-gray-300/90">
              Rely on us and our quality-tested tires. We stand for punctuality and safety on the road.
              </p>
            </CardContent>
          </Card>
          <Card 
          className="bg-gray-800 flex-1"
        >
            <CardHeader>
              <CardTitle className="text-xl md:text-4xl text-white">High Quality & Affordable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base md:text-lg mb-2 text-gray-400">Count on quality! Our tires are thoroughly tested with a tire testing machine (3 Bar air pressure). We sell only premium brands with fresh DOT.
              .</p>
              <p className="text-base md:text-lg text-gray-400">
              High-quality tires do not have to be expensive. With our attractive prices, we offer you cost-effective solutions without compromising on quality and safety.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 items-start">
              <div className="flex gap-2">
              {
                Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <StarFilledIcon className="w-6 h-6 text-yellow-500" />
                  </div>
                ))
              }
              
              </div>
              <p className="text-gray-200">
              <span className="font-bold">4,8</span> / 5 Rating based on <span className="font-bold">customer reviews</span>
              </p>
              </CardFooter>
          </Card>
        </div>
      </section>
      <section className="py-24 px-4 md:px-32 bg-gray-800">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          Our Quality Levels
        </h2>
        <p className="text-center text-lg mt-4 text-gray-400">
        Attention Business Owners! With a minimum stock of used tires, you are in the right place with us. Benefit from our service if 50% of the used tires have a remaining tread depth of at least 3 mm. Leave your used tires to us, without any pre-sorting – we take care of proper disposal.
        </p>
        <div className="mt-24 mb-0">
          <FeaturesSection/>
        </div>
        </section>
      {/* Export Section */}
      <section className=" py-24"id="export">
        <ExportWorldwide />
      </section>
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24 bg-gray-800" id='find-us'>
        <h1 className="text-2xl text-center font-bold mb-12">
          Find us on the map
        </h1>
        <div className="flex flex-col gap-8 md:flex-row">
        <iframe className="rounded w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.4364090754225!2d3.1099722752218693!3d50.87863275644343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c33587cb851f77%3A0xcdd1d0f8da2f0893!2sAriana%20banden%20service!5e0!3m2!1sen!2sbe!4v1726696723833!5m2!1sen!2sbe" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        Ledegem 8880, Belgium
        </iframe>
        <iframe className="rounded w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.073206923888!2d3.753669775236071!3d51.05173604389048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c37700051d85b7%3A0xcde1d6416f99d9f2!2sARIANA%20Bandencentrale!5e0!3m2!1sen!2sbe!4v1726697096646!5m2!1sen!2sbe" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
      {/* Contact Section */}
      <section className="bg-gray-900 px-4 md:px-8 text-center py-24" id='contact'>
        <div
        className="max-w-7xl mx-auto bg-blend-overlay bg-black/70 py-12 px-x md:px-8 bg-cover bg-center rounded"
        style={{
          backgroundImage: "url('/support.jpg')",
        }}
        >
        <h2 className="text-lg md:text-2xl font-bold mb-4 mt-4 tracking-tight text-balance">
          Contact us now!
        </h2>
        <p className="text-sm text-gray-400">
        Contact us now! We are happy to help you with your concerns and questions
        </p>
        <Button variant="outline" className="mt-8">
          <Link href="#quality" className="flex gap-2 items-center group">
          Contact us <PhoneCall className="ml-2 h-4 w-4 group-hover:mt-1 transition" />
          </Link>
        </Button>
        <CardFooter className="flex flex-col gap-4 items-center mt-8">
              <div className="flex gap-2">
              {
                Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <StarFilledIcon className="size-4 text-yellow-500" />
                  </div>
                ))
              }
              </div>
              <p>
              <span className="font-bold">4,8</span> / 5 Rating based on <span className="font-bold">customer reviews</span>
              </p>
              </CardFooter>
        </div>
      </section>
      

      {/* Footer */}
      <footer className="bg-gray-800 py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Ariana Banden Centraal</h3>
            <p className="text-sm text-gray-300">Your reliable partner for used tire disposal and tire service</p>
            Monday - Saturday 9:00 AM - 6:00 PM CET <span className='text-white bg-destructive/70 flex gap-2 items-center rounded w-fit p-2'>
            <InfoCircledIcon className="size-6" /> Only
            with appointment</span>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <p className="text-sm text-gray-300 flex flex-col">
              <span className="font-bold">
                Address</span>
            Provinciebaan 192A Ledegem 8880, Belgium
            </p>
            <p className="text-sm text-gray-300">+32 467662197</p>
            <p className="text-sm text-gray-300 flex gap-3">
              <a href="mailto:nikzadahmad@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100045062037203" className="flex items-center gap-2" target="_blank">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="https://wa.me/0032467662197" className="flex items-center gap-2" target="_blank">
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a href="https://g.co/kgs/L2FU3e3" className="flex items-center gap-2" target="_blank">
                <BiWorld className="w-4 h-4" />
              </a>

            </p>
        </div>
        <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <Link href="#services" className="text-sm text-gray-300">Services</Link>
            <Link href="#about-us" className="text-sm text-gray-300">About us</Link>
            <Link href="#contact" className="text-sm text-gray-300">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}