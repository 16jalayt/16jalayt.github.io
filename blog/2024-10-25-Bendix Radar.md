---
slug: BendixRadar
title: Bendix Weather Radar
authors: 16jalayt
tags: [teardown]
---
import Image from  '@site/src/components/Image';

<!--- TODO: Reassembled photo of control assembly -->

It has been a while since I have posted and I have now been laid off. Hopefully I will have more time and motivation to post. A few weeks ago, there was a user on Ebay that was parting out their Boeing 737 simulator. Not all of the parts were originally from a 737. Not all of them had been converted to work in a simulator. I was able to acquire an ex Bendix weather radar and associated control panel. The radar would have been located in the center of the front panel of the cockpit between the 2 pilots. I think the control panel would have been in the center console near the radio equipment. I could not find this model anywhere online, so I am not sure what plane it would have been in originally. It was made in the early 90s.

<Image src="https://live.staticflickr.com/65535/54054862321_ec1ab3abbd_b.jpg"
href="https://live.staticflickr.com/65535/54054862321_0fb7fef2d2_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54054862321"/>

<!-- truncate -->

The part I received is only the front panel from the original radar, so I don't have a model number or any other info about the original part. The display board that was used to replace the original CRT is a kyv-n2 v1. This board is available on [Amazon](https://www.amazon.com/NJYTouch-Controller-5-6inch-AT056TN53-640x480/dp/B081WSFSWS) for $32. I do not know where the sourced the LCD panel, but that was obtained separately. The panel was hot glued to the frame with a layer of thin foam insulating the back of the panel from the board.

<Image src="https://live.staticflickr.com/65535/54055105308_b792ba0632_b.jpg"
href="https://live.staticflickr.com/65535/54055105308_e792e1b10b_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54055105308"/>

<Image src="https://live.staticflickr.com/65535/54055105103_21539dfd7c_b.jpg"
href="https://live.staticflickr.com/65535/54055105103_53fb6d30d1_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54055105103"/>

There is then a layer of packing tape on top, I assume to prevent shorting. There was originally a Teensy++ 2.0 hot glued between the panel and the switches at the bottom. Most of the connections were severed when I received it, and with no documentation for pinout or a way to dump the micro, I just completely removed it and will have to start over.

<Image src="https://live.staticflickr.com/65535/54053992092_5a11768d0b_b.jpg"
href="https://live.staticflickr.com/65535/54053992092_f4382f901b_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54053992092"/>

The control assembly is completely separate. There is the button board, and the knobs. There originally would have been another board that would take the inputs and converts it to ARINC 429 (airplane equivalent of CAN bus or rs232) or something similar to be sent to the radar unit. There is lighting under the faceplate as well as inside each button. The faceplate material has a core that is translucent and is painted grey. This is to allow the knobs and lettering to glow slightly. This would have been very dim as the lighting is 5V incandescent lamps.

<Image src="https://live.staticflickr.com/65535/54055181529_914052c79e_b.jpg"
href="https://live.staticflickr.com/65535/54055181529_2218d3d698_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54055181529"/>
<Image src="https://live.staticflickr.com/65535/54054861746_d9ff5e9677_b.jpg"
href="https://live.staticflickr.com/65535/54054861746_5ba3aa2445_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54054861746"/>

This is not the original back plate, but a mid plate. It secures the button board to the back of the front plate. We can see the original manufacturer is Honeywell. Spectra Lux makes both lighting and avionics. Not sure if they were the designer, or if that is who makes the lamps. This panel was made in 1991, and the lights are 5V. I am also not sure if this was the original part to go with the radar, or if they are from separate sources. 

<Image src="https://live.staticflickr.com/65535/54055181679_98938ab602_b.jpg"
href="https://live.staticflickr.com/65535/54055181679_0fde114d67_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54055181679"/>

This is the cable that comes out the back of the previous assembly and would go to the missing board with the controller. It is a 2x15 DuPont style header. This part was converted for simulator use. There is a section of cut CAT5e cable coming from it. I don't know what micro they were using in the simulator. It seems like there are only enough wires in the ethernet to detect each of the 8 button presses. The way they connected the header to CAT5 was to strip the wires and then shove them inside the header. A "generous" amount of hot glue is all that keeps them in place. One of the wires seems to be broken. I was tracing the pinout, and I can't find continuity anywhere.

<Image src="https://live.staticflickr.com/65535/54053991477_c31a14c105_b.jpg"
href="https://live.staticflickr.com/65535/54053991477_988e6f8152_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54053991477"/>

This is the midplate. It is the main mount. The weird flatheads are what screws into the AV rack. The button assembly affixes by the two screw holes in the middle.

<Image src="https://live.staticflickr.com/65535/54054861466_a2bd074e5b_b.jpg"
href="https://live.staticflickr.com/65535/54054861466_f854592ccf_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54054861466"/>

The back side shows the two trimpots that control brightness and sensitivity as well as the selector switch, which the wires broke off of. The plate seems to be CNCd from a block of material, possibly brass? The fact that it was CNCd in 1991 is kind of impressive as that was a lot less common back then. It would have been expensive. The picture isn't as in focus as I would like, but you can still see tool marks on the interior. Based on the shape, the same piece may have been used for multiple avionics.

<Image src="https://live.staticflickr.com/65535/54055309805_0b3f920bf1_b.jpg"
href="https://live.staticflickr.com/65535/54055309805_cdeebaef75_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54055309805"/>

The buttons have a spot for the lamp to shine through and illuminate the word "ON".

<Image src="https://live.staticflickr.com/65535/54054861686_d73bb47f6a_b.jpg"
href="https://live.staticflickr.com/65535/54054861686_9c7c36d7a3_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54054861686"/>
<Image src="https://live.staticflickr.com/65535/54055104703_c88d6754af_b.jpg"
href="https://live.staticflickr.com/65535/54055104703_6278336b26_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54055104703"/>

There are 2 lamps per button and some others scattered around. There is a very nice looking photo cell in the top leftish of the board. This would change the lighting brightness based on how dark it is. Most avionics have this.

<Image src="https://live.staticflickr.com/65535/54053991567_1da240548c_b.jpg"
href="https://live.staticflickr.com/65535/54053991567_233181c884_o.jpg"
link="https://www.flickr.com/photos/193261163@N03/54053991567"/>