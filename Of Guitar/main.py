# hello_world.py

import PySimpleGUI as sg
import os.path
import conversionEngine as CE
import shutil
import string

# First the window layout in 2 columns

varTimeSig = ["1/4", "2/4", "3/4", "4/4"]
sg.theme('DarkPurple1')

file_list_column = [
    [
        sg.Text("Tablature File Location"),
        sg.In(size=(25, 1), enable_events=True, key="-FOLDER-"),
        sg.FolderBrowse(),
    ],
    [
        sg.Listbox(
            values=[], enable_events=True, size=(40, 20), key="-FILE LIST-"
        )
    ],
    [
        sg.Text("Enter name of piece:          "),
        sg.In(size=(25, 1), enable_events=True, default_text = "Classical Guitar", key="-pieceName-"),
        
        
    ],
    [
        sg.Text("Select time signature of piece"),
        sg.Listbox(varTimeSig, default_values = varTimeSig[3], size=(5,4), key='-LIST-'),
        
        
    ],
    [
        sg.Text("Save Location of MusicXML"),
        sg.In(size=(25, 1), enable_events=True, key="-saveLocation-"),
        sg.FolderBrowse(),
        
    ],
    [
        sg.Button("convert")
    ],

    #[sg.Text(size=(40,1), text = "Error: none", key="-errorCheck-")],

    

]

# For now will only show the name of the file that was chosen
image_viewer_column = [
    #[sg.Text("Choose a tablature from list on left:")],
    [sg.Text(size=(60,2), text = "Todo: Choose a tablature from the list on the left", text_color = "pink", key="-userTodo-")],
    [sg.Multiline(size=(60, 30), write_only = True, key="-TOUT-")],
    [sg.Image(key="-IMAGE-")],
    
]

# ----- Full layout -----
layout = [
    [
        sg.Column(file_list_column),
        sg.VSeperator(),
        sg.Column(image_viewer_column),
    ]
]

window = sg.Window("Tabs2XML", layout)

# Run the Event Loop
while True:
    event, values = window.read()
    if event == "Exit" or event == sg.WIN_CLOSED:
        break
    # Folder name was filled in, make a list of files in the folder
    if event == "-FOLDER-":
        folder = values["-FOLDER-"]
        try:
            # Get list of files in folder
            file_list = os.listdir(folder)
        except:
            file_list = []

        fnames = [
            f
            for f in file_list
            if os.path.isfile(os.path.join(folder, f))
            and f.lower().endswith((".txt"))
        ]
        window["-FILE LIST-"].update(fnames)
        window["-userTodo-"].update("Todo: Select tablature to convert from the list on the left")
    elif event == "-FILE LIST-":  # A file was chosen from the listbox
        try:
            filename = os.path.join(
                values["-FOLDER-"], values["-FILE LIST-"][0]
            )
            window["-userTodo-"].update("Todo: Enter the name and the save location then hit convert")
            
            assPoop = open(filename, "r")
            window["-TOUT-"].update(assPoop.read())
            window["-IMAGE-"].update()

        except:
            pass
    elif event == "convert" :
        try:
            
            
            sg.popup("file converted!")
            
            save_path = values["-saveLocation-"]
            file_name = values["-pieceName-"]
            timesig = values["-LIST-"]
            
            completeName = os.path.join(save_path, file_name+".musicxml")
            CE.xmlConverter(filename,completeName, timesig)
            bigPoop = open(completeName, "r")
            window["-TOUT-"].update(bigPoop.read())
            window["-userTodo-"].update("Todo: Select another tablature text file and if needed, change the tablature directory")
            # file1 = open(completeName, "w")
            # file1.write("")
            # file1.close()

        except:
            
            sg.popup("Error detected, please make sure you have selected a file to convert, a name for the piece and a save location")

            #window["-errorCheck-"].update("Error: No File Selected")
        
        