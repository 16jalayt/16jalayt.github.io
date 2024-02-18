---
slug: cricut-designStudio
title: Cricut DesignStudio Working Again
authors: 16jalayt
tags: [software, decompilation]
---
import Image from  '@site/src/components/Image';

[This blog post](https://github.com/16jalayt/Grasshopper-DesignStudio) details how to keep older Cricut machines working with a computer.

This is a decompilation and improvement of Provo Craft's Cricut DesignStudio. All rights and copyright goes to them. However, they have not supported the software since at least 2013, thus is considered abandonware. The first and second generation Cricut machines are no longer supported and no longer work with any supported software. This repo is an attempt to keep older Cricut machines working and out of landfills.

The software has been decompiled with ILSpy and rebuilt with newer versions of .net. The original program was .net 2.0, and the versions provided are .net 4.7 and 4.8. Choose 4.7 for Windows 7 and 4.8 for Windows 10 and 11.

<!-- truncate -->

## Installation

Go to [Releases here](https://github.com/16jalayt/Grasshopper-DesignStudio/releases/latest) and download the version for your operating system. Only the new binary is provided. You need the original program installer to use. It is available on the [Wayback Machine](https://web.archive.org/web/20130510081648/http://mirror.cricut.com/cds/fontpack/CDS_10404220.exe).
You can either install the software or extract the installer with [Universal Extractor](https://github.com/Bioruebe/UniExtract2) or [7Zip](https://www.7-zip.org/download.html).
Overwrite the executable with the version from this repository.

There is also a font update that is available [here](https://web.archive.org/web/20130915110352/http://www.cricut.com/home/support/CDS) under "Cartridge update 1", but I couldn't get it to install on Windows 10, so i'm not sure what the changes are. "Cartridge Update 2" was not archived and is presumed lost.

## Alternatives

Other software works too. One is the other Cricut original software called Cricut Craft Room. It runs on Adobe Air (Flash). Craft Room is dependent on the internet, however, and is unusable as the servers have been shut down. I have looked into patching this version, and it is beyond my ability right now. If anyone wants to try, [JPEXS Free Flash Decompiler](https://github.com/jindrapetrik/jpexs-decompiler) works well to view and edit any Flash or Air file.

The other alternative is [Sure Cuts A Lot](https://surecutsalot.com/software/software_scal.php) currently at version 6. Version 2 is the last one to support Cricut, but is no longer for sale. I got a hold of a copy, but it would'nt work for me. SCAL can trace images or import SVG files. There is a community plugin for version 4 and up called [libcutter](https://github.com/DThunder1000/libcutter). I have confirmed this working. It should work with Cricut Personal, Expression, and Create.
To install, run SCAL once to generate folders. There should now be a folder in your documents folder called "SCALCutPlugins". Copy all the files in libcutter/Windows/Build/ to SCALCutPlugins. You will also need a file that I am not allowed to distribute. It is available from the [Wayback Machine](http://web.archive.org/web/20130727005222/http://www.built-to-spec.com/files/keys.txt). This file should be renamed to "keys.h" and placed in that folder also. Inside the software you have to go cutters -> My Cutters -> Manage Cutters. Under Company/Brand select Cricut. Under model, select the only option showing the models supported by libcutter. Click Add to List and it should be ready to go!

![visitors](https://visitor-badge.laobi.icu/badge?page_id=16jalayt.cricut-designStudio)