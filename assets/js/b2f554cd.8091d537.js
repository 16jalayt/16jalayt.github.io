"use strict";(self.webpackChunksapphire_forge_github_io=self.webpackChunksapphire_forge_github_io||[]).push([[477],{10:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"cricut-designStudio","metadata":{"permalink":"/blog/cricut-designStudio","source":"@site/blog/2023-5-14-Cricut DesignStudio.md","title":"Cricut DesignStudio Working Again","description":"This blog post details how to keep older Cricut machines working with a computer.","date":"2023-05-14T00:00:00.000Z","formattedDate":"May 14, 2023","tags":[{"label":"software","permalink":"/blog/tags/software"},{"label":"decompilation","permalink":"/blog/tags/decompilation"}],"hasTruncateMarker":false,"authors":[{"name":"Jason Layton","title":"Sapphire Forge maintainer","url":"https://github.com/16jalayt","key":"16jalayt"}],"frontMatter":{"slug":"cricut-designStudio","title":"Cricut DesignStudio Working Again","authors":"16jalayt","tags":["software","decompilation"]},"nextItem":{"title":"Actiontec GT701 DSL Modem","permalink":"/blog/gt701-modem"}},"content":"import Image from  \'@site/src/components/Image\';\\n\\nThis blog post details how to keep older Cricut machines working with a computer.\\n<https://github.com/16jalayt/Grasshopper-DesignStudio>\\n\\nThis is a decompilation and improvement of Provo Craft\'s Cricut DesignStudio. All rights and copyright goes to them. However, they have not supported the software since at least 2013, thus is considered abandonware. The first and second generation Cricut machines are no longer supported and no longer work with any supported software. This repo is an attempt to keep older Cricut machines working and out of landfills.\\n\\nThe software has been decompiled with ILSpy and rebuilt with newer versions of .net. The original program was .net 2.0, and the versions provided are .net 4.7 and 4.8. Choose 4.7 for Windows 7 and 4.8 for Windows 10 and 11.\\n\\n## Installation\\n\\nGo to [Releases here](https://github.com/16jalayt/Grasshopper-DesignStudio/releases/latest) and download the version for your operating system. Only the new binary is provided. You need the original program installer to use. It is available on the [Wayback Machine](https://web.archive.org/web/20130510081648/http://mirror.cricut.com/cds/fontpack/CDS_10404220.exe).\\nYou can either install the software or extract the installer with [Universal Extractor](https://github.com/Bioruebe/UniExtract2) or [7Zip](https://www.7-zip.org/download.html).\\nOverwrite the executable with the version from this repository.\\n\\nThere is also a font update that is available [here](https://web.archive.org/web/20130915110352/http://www.cricut.com/home/support/CDS) under \\"Cartridge update 1\\", but I couldn\'t get it to install on Windows 10, so i\'m not sure what the changes are. \\"Cartridge Update 2\\" was not archived and is presumed lost.\\n\\n## Alternatives\\n\\nOther software works too. One is the other Cricut original software called Cricut Craft Room. It runs on Adobe Air (Flash). Craft Room is dependent on the internet, however, and is unusable as the servers have been shut down. I have looked into patching this version, and it is beyond my ability right now. If anyone wants to try, [JPEXS Free Flash Decompiler](https://github.com/jindrapetrik/jpexs-decompiler) works well to view and edit any Flash or Air file.\\n\\nThe other alternative is [Sure Cuts A Lot](https://surecutsalot.com/software/software_scal.php) currently at version 6. Version 2 is the last one to support Cricut, but is no longer for sale. I got a hold of a copy, but it would\'nt work for me. SCAL can trace images or inport SVG files. There is a community plugin for version 4 and up called [libcutter](https://github.com/DThunder1000/libcutter). I have confirmed this working. It should work with Cricut Personal, Expression, and Create.\\nTo install, run SCAL once to generate folders. There should now be a folder in your documents folder called \\"SCALCutPlugins\\". Copy all the files in libcutter/Windows/Build/ to SCALCutPlugins. You will also need a file that I am not allowed to distribute. It is available from the [Wayback Machine](http://web.archive.org/web/20130727005222/http://www.built-to-spec.com/files/keys.txt). This file should be renamed to \\"keys.h\\" and placed in that folder also. Inside the software you have to go cutters -> My Cutters -> Manage Cutters. Under Company/Brand select Cricut. Under model, select the only option showing the models supported by libcutter. Click Add to List and it should be ready to go!"},{"id":"gt701-modem","metadata":{"permalink":"/blog/gt701-modem","source":"@site/blog/2023-3-26-Actiontec GT701 DSL Modem.md","title":"Actiontec GT701 DSL Modem","description":"This was my families\' first DSL modem circa 2009. Quest was apparently a nation wide ISP (I was very young). They were bought out by Century Link. The OEM of their equipment was and still is Actiontec.","date":"2023-03-26T00:00:00.000Z","formattedDate":"March 26, 2023","tags":[{"label":"teardown","permalink":"/blog/tags/teardown"}],"hasTruncateMarker":false,"authors":[{"name":"Jason Layton","title":"Sapphire Forge maintainer","url":"https://github.com/16jalayt","key":"16jalayt"}],"frontMatter":{"slug":"gt701-modem","title":"Actiontec GT701 DSL Modem","authors":"16jalayt","tags":["teardown"]},"prevItem":{"title":"Cricut DesignStudio Working Again","permalink":"/blog/cricut-designStudio"},"nextItem":{"title":"HHP IT-3800 Barcode Scanner","permalink":"/blog/hhp7800"}},"content":"import Image from  \'@site/src/components/Image\';\\n\\nThis was my families\' first DSL modem circa 2009. Quest was apparently a nation wide ISP (I was very young). They were bought out by Century Link. The OEM of their equipment was and still is Actiontec.\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52772715581_836d7465f0_c.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52772715581_b511a8c6ef_o.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52772715581\\"/>\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52772718471_9c5b6def48_c_d.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52772718471_6eb32ab6a9_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52772718471\\"/>\\n\\nThere is a large section of unpopulated BGA and QFP packages on the left. It is possible a different model had Wi-Fi built in. There is sort of a punch out in the back of the case for an antenna. Notice how there is also no solder mask around what would be the RF section on the left. There is also what looks like a JTAG connector on the bottom right.\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52773134335_6508d84281_c_d.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52773134335_4fd542072f_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52773134335/\\"/>\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52773203048_a267f36e15_c_d.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52773203048_a4e75d6909_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52773203048/\\"/>\\n\\nOne of the capacitors doesn\'t look so good.\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52773200253_331c44aa2d_c_d.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52773200253_d90bfba5f6_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52773200253\\"/>\\n\\n\\n\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52772185207_480ef6a4b3_c_d.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52772185207_30e356d2c0_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52772185207\\"/>\\n\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52773131625_4c6bb2a826_c_d.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52773131625_bc11cf37d0_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52773131625\\"/>\\n\\nI\'m not entirely sure what the USB port did. It wasn\'t like newer routers with the media device server. I think you could plug it directly into a computer to get internet instead of ethernet. I remember it came with one of those ubiquitous blue USB type B cables. Also a mold mark closeup for those who care...\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52773131530_952ba8e69d_c_d.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52773131530_7c0b7f9bd1_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52773131530\\"/>"},{"id":"hhp7800","metadata":{"permalink":"/blog/hhp7800","source":"@site/blog/2023-3-26-HHP IT-3800 Barcode Scanner.md","title":"HHP IT-3800 Barcode Scanner","description":"Just a quick teardown of a barcode scanner. One annoying thing is you have to remove the nameplate to get to screws.  Another quirk is the cord requires an adapter. This is so they can have one scanner with different plugs. In this case it has a USB HID converter on it. This also works with a lot of cash registers and rs232. The converter chip is made by Cypress.","date":"2023-03-26T00:00:00.000Z","formattedDate":"March 26, 2023","tags":[{"label":"teardown","permalink":"/blog/tags/teardown"}],"hasTruncateMarker":false,"authors":[{"name":"Jason Layton","title":"Sapphire Forge maintainer","url":"https://github.com/16jalayt","key":"16jalayt"}],"frontMatter":{"slug":"hhp7800","title":"HHP IT-3800 Barcode Scanner","authors":"16jalayt","tags":["teardown"]},"prevItem":{"title":"Actiontec GT701 DSL Modem","permalink":"/blog/gt701-modem"},"nextItem":{"title":"Mystery Train Plow","permalink":"/blog/train-plow"}},"content":"import Image from  \'@site/src/components/Image\';\\n\\nJust a quick teardown of a barcode scanner. One annoying thing is you have to remove the nameplate to get to screws.  Another quirk is the cord requires an adapter. This is so they can have one scanner with different plugs. In this case it has a USB HID converter on it. This also works with a lot of cash registers and rs232. The converter chip is made by Cypress.\\n\\n:::info\\n\\nManual download:\\nhttps://drive.google.com/file/d/17ErWwt9QRGA4o5jdOde_Xb7mj_jnladc/view?usp=sharing\\n\\nCPU Datasheet:\\nhttps://drive.google.com/file/d/1vVM9eYV08V0UKzpKYW0xNOAsg4zZ6SxE/view?usp=sharing\\n\\n:::\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52773385423_3a25bdeb39_c_d.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52773385423_2ba6577406_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52773385423/in/album-72177720307014652/\\"/>\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52773160084_1e7854c1d7_c_d.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52773160084_58423df032_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52773160084/in/album-72177720307014652/\\"/>\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52773160044_24bedf47f2_c_d.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52773160044_421a82941b_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52773160044/in/album-72177720307014652\\"/>\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52773385298_38eb9e847c_c_d.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52773385298_3ed434418f_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52773385298/in/album-72177720307014652\\"/>\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52773319065_58f81c3220_c_d.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52773319065_eedc98355b_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52773319065/in/album-72177720307014652/\\"/>\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52773319035_2c05d5f6ab_c_d.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52773319035_0902e2c32d_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52773319035/in/album-72177720307014652\\"/>\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52773159899_279fda2164_c_d.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52773159899_1c0781046b_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52773159899/in/album-72177720307014652/\\"/>\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52773318930_8f24c38ce6_c_d.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52773318930_bdce5ce900_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52773318930/in/album-72177720307014652/\\"/>\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52772371477_215b84343d_c_d.jpg\\" \\nhref=\\"https://live.staticflickr.com/65535/52772371477_0cc09a9f82_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52772371477/in/album-72177720307014652/\\"/>\\n\\n<Image src=\\"https://live.staticflickr.com/65535/52772902276_e4f9b59b51_c_d.jpg\\" \\nhref=\\"hhttps://live.staticflickr.com/65535/52772902276_d8d39cf8fb_o_d.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/193261163@N03/52773318930/in/album-72177720307014652/\\"/>"},{"id":"train-plow","metadata":{"permalink":"/blog/train-plow","source":"@site/blog/2023-3-26-Mystery Train Plow/index.md","title":"Mystery Train Plow","description":"Sorry for the bad picture quality, but this was taken from a moving vehicle on the interstate. This winter CN had one of their snowplows in the Cedar Lake yard in Cedar Rapids. The pictures were taken in February of 2021.","date":"2023-03-26T00:00:00.000Z","formattedDate":"March 26, 2023","tags":[{"label":"trains","permalink":"/blog/tags/trains"}],"hasTruncateMarker":false,"authors":[{"name":"Jason Layton","title":"Sapphire Forge maintainer","url":"https://github.com/16jalayt","key":"16jalayt"}],"frontMatter":{"slug":"train-plow","title":"Mystery Train Plow","authors":"16jalayt","tags":["trains"]},"prevItem":{"title":"HHP IT-3800 Barcode Scanner","permalink":"/blog/hhp7800"}},"content":"import Image from  \'@site/src/components/Image\';\\n\\nSorry for the bad picture quality, but this was taken from a moving vehicle on the interstate. This winter CN had one of their snowplows in the Cedar Lake yard in Cedar Rapids. The pictures were taken in February of 2021.\\n\\n![](./Cedar-Lake-Snowplow-2-2.21.jpg)\\n![](./Cedar-Lake-Snowplow-2.21.jpg)\\n\\nI didn\'t know what this was beforehand. They are called Jordan Spreaders. They were originally used to spread ballast along the tracks, but are also used to plow snow. Here is the Wikipedia link if you want the full history: <a href=\\"https://en.wikipedia.org/wiki/Spreader_(railroad)\\">https://en.wikipedia.org/wiki/Spreader_(railroad)</a>. The pictures below are much better views of what spreaders look like with lots of retractable blades.\\n\\n\\nFrom <a href=\\"https://www.flickr.com/photos/26063910@N00\\">Brian Hicks</a>:\\n<Image src=\\"https://live.staticflickr.com/4422/35694226874_8721fe5b27_b.jpg\\" \\nhref=\\"https://live.staticflickr.com/4422/35694226874_8721fe5b27_b.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/26063910@N00\\"/>\\n\\nFrom <a href=\\"https://www.flickr.com/photos/26063910@N00\\">Ed W</a>:\\n<Image src=\\"https://live.staticflickr.com/1848/29805078527_192e94e055_b.jpg\\" \\nhref=\\"https://live.staticflickr.com/1848/29805078527_192e94e055_b.jpg\\"\\nflkr=\\"https://www.flickr.com/photos/26063910@N00\\"/>"}]}')}}]);