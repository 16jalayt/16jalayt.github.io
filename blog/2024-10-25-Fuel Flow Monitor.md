---
slug: FuelFlowMonitor
title: Shadin Miniflo
authors: 16jalayt
tags: [teardown]
---
import Image from  '@site/src/components/Image';

Today's teardown is a Shadin Miniflo which is a fuel flow sensor for an aircraft. You program in how much fuel you take in and it shows how many gallons of fuel are left in flight. There would be a transducer of some sort in both fuel lines of the aircraft. Manufactured late 91.

<Image src="https://live.staticflickr.com/65535/54093036504_3babe40bf6_b.jpg"
href="https://live.staticflickr.com/65535/54093036504_e36207972a_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54093036504"/>

<!-- truncate -->

<Image src="https://live.staticflickr.com/65535/54091822047_9c16d2fd97_b.jpg"
href="https://live.staticflickr.com/65535/54091822047_8686346158_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54091822047"/>

<Image src="https://live.staticflickr.com/65535/54092943178_ffbfaf6357_b.jpg"
href="https://live.staticflickr.com/65535/54092943178_2c0dcf1349_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54092943178"/>

<Image src="https://live.staticflickr.com/65535/54093148305_bfa945f6a1_b.jpg"
href="https://live.staticflickr.com/65535/54093148305_95e4ffae6d_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54093148305"/>

One interesting feature that this device has that I have never seen on any other avionic is an anti tamper tag. There is a loop of wire run through the head of a screw. The wire is run around the corner, through another screw and the two ends are held together with a chunk of squished metal. They probably heat a slug of metal (lead?) with an induction heater and then crimp it on the wire. Something similar is done all over the place on aircraft, called safety wire. The purpose is to prevent screws from backing out due to vibration. It is usually used for structural elements. The ends are usually just twisted together instead of using the slug. The fact that they lock the end definitely means that this is for anti-tamper.

<Image src="https://live.staticflickr.com/65535/54092942663_0713edf3a1_b.jpg"
href="https://live.staticflickr.com/65535/54092942663_b711046fba_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54092942663"/>

<Image src="https://live.staticflickr.com/65535/54093024594_beff38c093_b.jpg"
href="https://live.staticflickr.com/65535/54093024594_766d587073_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54093024594"/>

This monitor is made up of 2 boards. The processor board and the interface board. The interface board contains the single connector to the outside, which is a standard male db-9 that also happens to carry rs-232 in a nonstandard pinout. The pinout is custom because it also carries power as well as the transducer inputs. There is a ubiquitous MAX232 to handle output. The pins on the right connect to the display board, which is a pain to get realigned when reassembling. You have to unscrew the front plate, attach the boards, feed through the case, then reattach the front. Very unintuitive. You can see in the detail shots below, there is a fiberglass sheet to prevent the boards from shorting to the case. There is also a opamp with a trimpot. This would likely be handling the transducer input. I have not looked into how the transducers work, although this unit supposedly handles two transducers with a single opamp? The datasheet for the opamp is [HERE](datasheets/fuelflow/LM207.pdf) There is also a single bodge, an extra diode. You can see in the detail shots below, there is a standoff with one end glued to the CPU board. It is not hot glue, but some sort of flexible epoxy like the stuff you use for weather sealing................ chips

<Image src="https://live.staticflickr.com/65535/54093023429_862652b742_b.jpg"
href="https://live.staticflickr.com/65535/54093023429_ee3ce5f686_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54093023429/"/>

<Image src="https://live.staticflickr.com/65535/54091823092_49c944bb31_b.jpg"
href="https://live.staticflickr.com/65535/54091823092_134642bda4_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54091823092"/>

<Image src="https://live.staticflickr.com/65535/54092942673_d5bc65387e_b.jpg"
href="https://live.staticflickr.com/65535/54092942673_cd920ea21c_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54092942673/"/>

The CPU board has all the bits you need on it. The board says: "Processor Board (Intel)". This implies other CPU boards were designed. They probably used the same processor boards in other products. The CPU is an MHS 80C32. [Datasheet](datasheets/fuelflow/80C32_Family.pdf). This is an 8051 with 256K onboard RAM. Punch your 8051 membership card now. The SEEQ chip is a 2K EEPROM. [Datasheet](datasheets/fuelflow/Seeq_2816A.pdf). The chip below that is 2K of SRAM. [Datasheet](datasheets/fuelflow/HM0-6116-6.pdf). On the bottom, there is a 32K EPROM. [Datasheet](datasheets/fuelflow/HM0-6116-6.pdf).There is a 555 timer in the bottom left. Above that is a Dallas DS. It converts SRAM to be nonvolatile with a battery. [Datasheet](datasheets/fuelflow/DS1210.pdf). There is no battery present in the device.

<Image src="https://live.staticflickr.com/65535/54093241179_936d65f251_b.jpg"
href="https://live.staticflickr.com/65535/54093241179_c88c20a085_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54093241179"/>

<Image src="https://live.staticflickr.com/65535/54093241204_6d46f3aa33_b.jpg"
href="https://live.staticflickr.com/65535/54093241204_27315ce338_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54093241204/"/>

The display just uses standard 7 segment displays. There is a button, two switches and a photo cell in a gold plated can. Most avionics have this for auto dimming. The driver ICs are MC75491P. The datasheet is [HERE](datasheets/fuelflow/MC75491.pdf). They just appear to be just 4 high current transistors in a dip package designed for driving LEDs.
