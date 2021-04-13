import xml.etree.cElementTree as ET
import numpy as np
from xml.dom import minidom
from itertools import cycle
import re
from typing import NamedTuple


    # =======CLASSES TO USE LATER=============
def xmlConverter(someFile, nameFile, piece_name, timeSig):


    text=someFile.split()
    textarr = []



    # Python3 program to Split string into characters



    for t in text:
        textarr.append(list(t))

    numpy_array = np.array(textarr)
    transpose = numpy_array.T

    #### THE TRANSPOSED ARRAY YOU WANT TO  WORK WITH####
    transpose_list = transpose.tolist()





    ###################### THIS IS THE DEFAULT, GET THE REAL ONE FROM THE USER AS A PRO TO THIS ENGINE
    inputTabMeasure = 4/4

    #GET THE NUMBER OF LINES ---> NOT THE SAME EVERY TIME
    numberOfInstruments = 6

    #REGEX OF RECOGNIZED CHARACTERS

    #AN ARRAY OF ALL THE ISSIUES THAT HAVE BEEN DETECTED ################################### CREAT A NEW FILE AND ADD **** AROUND THE UNSUPPORTED CHARACTERS. ONLY DOES THIS ONES WHEN THE PROGRAM HAS FINISHED
    listOfDetectedErrors = []

    def isAcceptedCharacter(theCharacterInQuestion):
        verdict = False
        if (theCharacterInQuestion == ("x") or theCharacterInQuestion == ("o") or theCharacterInQuestion == ("|") or theCharacterInQuestion == ("f")):
            verdict = True
        else:
            listOfDetectedErrors.append("isAcceptedCharacter error found: " + theCharacterInQuestion + " is not a supported character." + " chacter is located at: " + str(open("demofile.txt", 'r').read().find(theCharacterInQuestion)) + " of the input file")
        return verdict

   


    #IT'LL COUNT BUT STILL HAVE TO PLAN FOR "|"
    def noteCalculator(time, whichLine):
        duration = 0
        noteFound = False
        for unitOfTime in range((time - 1), (len(transpose_list))): #Will cycle through each unit of time
            if unitOfTime[0] == "|":
                break
            numberOfDashes = 0
            for character in range(0, (numberOfInstruments)): #Will cycle through each instrument                        
                if isAcceptedCharacter(character): #First check if the characters are valid
                    if character == "-":
                        numberOfDashes += 1
                        if numberOfDashes == numberOfInstruments:
                            duration += 1
                    elif character != "-":
                        noteFound = True
                        break
                        #STOP IF A NOTE IS FOUND
                elif not isAcceptedCharacter(character):
                    duration = -1 #means we'll skip this note ################ ADD AN ERROR TO LET THEM KNOW THAT SOMETHING WENT WRONG BUT WE CONVERTED EVERYTHING ELSE. THE ERROR FILE AND COPY OF THE INPUT FILE WITH TEH HIGHLIGHT AROUNF THE UNSUPPORTED CHARACTER IS IN THE FILE LOCATION
        return duration



    
        



        return None

    def noteStructArrayHandler():
        return None

    def divisionCalculator():
        numberOfPipes = 0
        lengthOfTheMeasure = 0
        for unitOfTime in range((0, (len(transpose_list)))):
            for character in range(0, (numberOfInstruments)):
                if (transpose_list[unitOfTime][character] == "|"):
                    numberOfPipes += 1
                    if numberOfPipes == numberOfInstruments: #this one confirms that we just found the first sub array made of all pipes e.i. the start of the first measure
                        poop = character                    
                        while (transpose_list[unitOfTime][ + 1] != "|"):
                            character + 1
                            lengthOfTheMeasure += 1
                            for charactersInTheMeasure in transpose_list[unitOfTime]:
                                if (isAcceptedCharacter(character) and character != "|"): #this will made sure that the character we're at is accepted and its not a pipe
                                    lengthOfTheMeasure += 1

        return None

    #needs to still work if there is text on top and under the tabs. For the annotation stuff


                        

        

    def noteTypeHandler():
        return None

    def beamHandler():
        return None

    def chordHandler():
        return None

    def instrumentIdentifier(ID1, ID2):
        instrumentPartId = ""
        if ((ID1 + ID2) == "BD" or (ID1 + ID2) == "KD" or (ID1 + ID2) == "bd" or (ID1 + ID2) == "kd"):
            instrumentPartId = "P1-I36"
        elif ((ID1 + ID2) == "SD" or (ID1 + ID2) == "S " or (ID1 + ID2) == "sd" or (ID1 + ID2) == "s "):
            instrumentPartId = "P1-I39"
        elif ((ID1 + ID2) == "HH" or (ID1 + ID2) == "hh"):
            instrumentPartId = "P1-I43"
        elif ((ID1 + ID2) == "RC" or (ID1 + ID2) == "R " or (ID1 + ID2) == "rc" or (ID1 + ID2) == "r "):
            instrumentPartId = "P1-I52"
        elif ((ID1 + ID2) == "CC" or (ID1 + ID2) == "C " or (ID1 + ID2) == "cc" or (ID1 + ID2) == "c "):
            instrumentPartId = "P1-I50"
        elif ((ID1 + ID2) == "HT" or (ID1 + ID2) == "H " or (ID1 + ID2) == "ht" or (ID1 + ID2) == "h "):
            instrumentPartId = "P1-I48"
        elif ((ID1 + ID2) == "MT" or (ID1 + ID2) == "M " or (ID1 + ID2) == "mt" or (ID1 + ID2) == "m "):
            instrumentPartId = "P1-I46"
        elif ((ID1 + ID2) == "FT" or (ID1 + ID2) == "F " or (ID1 + ID2) == "ft" or (ID1 + ID2) == "f "):
            instrumentPartId = "P1-I42"
        else:
            instrumentPartId = "Unrecognized"

    def duration(fret):  # find the next occurence of a number
        dur = 0

        for i in range(fret, len(transpose_list)):
            if transpose_list[i][0] == "-" and len(
                    set(transpose_list[i])) == 1:  # if the first "|" occurs, then the first measure starts
                dur += 1
            else:
                break
        if dur > 8:
            return 8
        else:
            return dur + 1

    def isChord(beat, string):
        accepted_characters = ["x","o","f", "X", "O", "F"]

        contained = [a in transpose_list[beat][slice(0,string,1)] for a in accepted_characters]
        
        if True in contained:
            return True
        else:
            return False

    print(timeSig)
    print(timeSig[0])
    print(timeSig[0][0])
    

            
        

    def measureNum(beat, string):

        
        behind = numpy_array[string][slice(0,beat,1)]
        
        barsBehind = 0

        for x in behind:
            if x == "|":
                barsBehind+=1
        return barsBehind

    def howManyCharactersBetween2Pipes():
        characterInMeasure = 0
        
        firstBar = False   
        measureStarted = False
        for t in transpose_list:
            
            if len(set(t)) == 1 and t[0] == "|" and firstBar == False:
                firstBar = True
                measureStarted = True
            elif len(set(t)) == 1 and t[0] == "|" and firstBar == True:
                break
            else: 
                if measureStarted == True:
                    characterInMeasure += 1

                
        return characterInMeasure
        



    
    
    def noteTypeCalculator(division, duration):
        nums1 = float(timeSig[0][0]) / float(division)
        nums = nums1 * float(duration)
        answer = ""
        if nums == 1:            
            answer = "whole"
        elif nums == 0.5:
            answer = "half"
        elif nums == 0.25:
            answer = "quarter"
        elif nums == 0.125:
            answer = "eighth"
        elif nums == 0.062:
            answer = "16th"
        elif nums == 0.03125:
            answer = "32nd"
        elif nums == 0.015625:
            answer = "64th"
        else:
            answer = "quarter"
        return answer
    
    def octaveCalculator(partID):
        theOctave = 0
        if (partID == "P1-I36"):
            theOctave = 4
        elif (partID == "P1-I39"):
            theOctave = 5
        elif (partID == "P1-I43"):
            theOctave = 5
        elif (partID == "P1-I52"):
            theOctave = 5
        elif (partID == "P1-I50"):
            theOctave = 5
        elif (partID == "P1-I48"):
            theOctave = 5
        elif (partID == "P1-I46"):
            theOctave = 5
        elif (partID == "P1-I42"):
            theOctave = 4
        else:
            theOctave = 5

        return theOctave

    def stepCalculator(partID):
        theOctave = ""
        if (partID == "P1-I36"):
            theOctave = "F"
        elif (partID == "P1-I39"):
            theOctave = "C"
        elif (partID == "P1-I43"):
            theOctave = "G"
        elif (partID == "P1-I52"):
            theOctave = "F"
        elif (partID == "P1-I50"):
            theOctave = "A"
        elif (partID == "P1-I48"):
            theOctave = "E"
        elif (partID == "P1-I46"):
            theOctave = "D"
        elif (partID == "P1-I42"):
            theOctave = "A"
        else:
            theOctave = "F"

        return theOctave
    
    def stemDirectionDictator(numberOfStrings, whichString):
        theResult = ""


        if (numberOfStrings == 1):
            theResult = "up"
        elif (numberOfStrings == 2 and whichString ==1):
            theResult = "up"
        elif (numberOfStrings == 2 and whichString ==2):
            theResult = "down"



        #cahcah = int(numberOfStrings/2) + 1
        #elif (whichString > cahcah):
        #    theResult = "down"
        #elif (whichString <= cahcah):
        #    theResult = "up"

        #return theResult
    
        
    def howManyStrings(): 
        return len(transpose_list[0])


    


        


        

                


    score_partwise = ET.Element("score-partwise", version="3.1")
    part_list = ET.SubElement(score_partwise, "part-list")

    score_part = ET.SubElement(part_list, "score-part", id="P1")

    part_name = ET.SubElement(score_part, "part-name").text = piece_name  # input part name here from user

    part = ET.SubElement(score_partwise, "part", id="P1")

    tree = ET.ElementTree(score_partwise)


        # place notes

    
    class NoteStruct(NamedTuple):
        noteHead: str
        colPos: int
        string: int
        duration: int
        isFlam: bool
        ifChord: bool
        whatMeasure: int
        instruemntID: str
        noteType: str
        octave: int
        step: str
        stemDirection: str
        

        # stemDirection: int
        # inMeasure: int
        # isChord: int
        # baz: list
         #example on how you'd do nested sturctures
    noteArrayStruct = []
    def startProgram(arr):

      row_indx = 0; 
      col_indx = 0; 
      m = 0
      accepted_characters = ["x","o","f", "X", "O"]
      for col in arr: 
          col_indx = col_indx + 1
          row_indx = 0

          if str(col) == 1 and col[0] == "|":
              measure = ET.SubElement(part, "measure", number=str(m))
              m += 1
          for row in col: 
            if row in accepted_characters:
                _noteHead = NoteStruct(str(row))
                _colPos = str(col_indx)               
                _string = str(row_indx + 1)
                _duration = duration(col_indx)
                #_isFlam = MANUALLY SET FOR EACH
                #_ifChord = MANUALLY SET FOR EACH
                _whatMeasure = measureNum(col_indx - 1, row_indx)
                _instruemntID = instrumentIdentifier(transpose_list[0][0], transpose_list[1][0])
                _noteType = noteTypeCalculator(((howManyCharactersBetween2Pipes())/(int(timeSig[0][0]))), _duration)
                _octave = octaveCalculator(_instruemntID)
                _step = stepCalculator(_instruemntID)
                _stemDirection = stemDirectionDictator(howManyStrings(), row_indx + 1)




                
               
                if (str(row) == "f"): # will tests if we find a flam
                    noteArrayStruct.append(NoteStruct(_noteHead, _colPos, _string, _duration, True, False, _whatMeasure, _instruemntID, _noteType, _octave, _step, _stemDirection))
                    noteArrayStruct.append(NoteStruct(_noteHead, _colPos, _string, _duration, True, True, _whatMeasure, _instruemntID, _noteType, _octave, _step, _stemDirection))
                   
                else:                    
                    noteArrayStruct.append(NoteStruct(_noteHead, _colPos, _string, _duration, False, isChord(col_indx - 1, row_indx), _whatMeasure, _instruemntID, _noteType, _octave, _step, _stemDirection))

                
                    
            row_indx = row_indx + 1
            
    
    for i in noteArrayStruct:
        note = ET.SubElement(measure, "note")
        unpitched = ET.SubElement(measure, "upitched")
        display_step = ET.SubElement(unpitched, "display-step").text = str(i.step)
        display_octave = ET.SubElement(unpitched, "display-octave").text = str(i.octave)
        duration_tag = ET.SubElement(note, "duration").text = str(i.duration)
        instrument_tag = ET.SubElement(note, "intrument", id= str(i.instruemntID))
        voice_tag = ET.SubElement(note, "voice").text = "1"
        type_tag = ET.SubElement(note, "type").text = str(i.noteType)
        stem_tag = ET.SubElement(note, "steam").text = str(i.stemDirection)
        notehead_tag = ET.SubElement(note, "notehead").text = str(i.noteHead)
        #beam_tag = ET.SubElement(note, "beam")
        



    startProgram(transpose_list)

























    xmlstr = minidom.parseString(ET.tostring(score_partwise)).toprettyxml(indent="   ")

    
    tree.write(nameFile)

    with open(nameFile, "w") as f:
        f.write(xmlstr)