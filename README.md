Project Summary: Retrieval and Presentation of Similar Patients to Support Clinicians at the Bedside
===============

Introduction and Goals
----------------------

Doctors are confronted with a deluge of information daily in order to help with patient care and diagnosis. As our ability to record and store information at a higher resolution grows, doctors in turn are expected to cognitively process and utilize this increased amount of data. CHLA's VPICU group recently proposed a patient similarity ranking algorithm which can traverse their store of 10K+ patient records and return a ranked list of similar patients. This dashboard was constructed as a proposed method of presenting data to doctors that are actively in the process of treating patients such that they are able to

- receive data about the current patient in an efficient and visually clear manner that delivers more information to them in real time
- have a tool that gives them the option to contextualize their current patient in terms of past patients

Demo
------------
A live demo for the 800 by 600 will be mounted soon.

Process
------------

This project was done by Parama Pal, Diana MacLean, and Jeffrey Heer in collaboration with the David Kale at the Virtual Pediatric Intensive Care Unit Group (VPICU) at the Children's Hospital in Los Angeles (CHLA) over 8 weeks during the summer of 2011. It was primarily conducted in Palo Alto, CA, but involved meeting and shadowing for a thorough contextual inquiry process for one week as well as one week of more intensive collaboration and preparation before MUCMD (Meaningful Uses of Complex Medical Data) at CHLA. 

Resources
------------
The project was done primarily in javascript using [D3.js](https://github.com/mbostock/d3/) by Michael Bostock

Updates
------------
- The current version was updated to be 800 by 600 since this was for a presentation. 
- Currently working on a new version that will have the specific plots separated out and then loaded into the main html file to further enhance readability (beyond commenting or trying to clump the same code together) and use datavore to make the data calls more streamlined and speedy. 

Contributors
-------------
David Kale ([turambar](https://github.com/turambar/)), Diana McLean ([malcdi](https://github.com/malcdi)), Parama Pal ([parama](https://github.com/parama/)), Jeffrey Heer ([jheer](https://github.com/jheer/))