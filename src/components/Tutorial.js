import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Masonry } from '@mui/lab';
import { styled } from '@mui/material/styles';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const tutorialSteps = [
  {
    title: <h3>Logging into eScriptorium</h3>,
    content: {
      text: <><li> You log into eScriptorium with an individual account made up of a login, a password and an email address. An account is created by the user after receiving an invitation or by the site administrator: </li><li>Once logged on, you will see the dashboard which allows you to manage all the documents created by and shared with the account. On first login, this dashboard is empty. </li></> ,
      image: <img src = '/tutorial_images/articulation_seg_trans_baseline-768x341.png' alt = "articulation_seg_trans_baseline" width = "100%" />,
    }
  },
  {
    title: <h3>Create a new document</h3>,
    content: {
      text:  <><li> The “document” is a collection of images forming a whole unit;</li><li> A ” document-part” is an image–a page belonging to a document. </li>
      
      <h4>  Instructions </h4>
       <li> To create a document, click on the “Create new” button; a new page is displayed as well as an input form: </li>
       <li> The “Name” field is mandatory. The others are optional and can be completed later. We will come back to the “Ontology” section later. </li>
        <li >Once the information has been entered, click on “Create” to create the document; a message is then displayed: “Document created successfully!” You can still modify the data entered: the “Create” button has been replaced by an “Update” button.</li>
      </>,
      image: 'https://via.placeholder.com/150',
      video: ''
    }
  },
  {
    title: <h3>Upload images</h3>,
    content: {
      text: <>
       <h4>  Access the interface </h4>
       <li> The “Images” interface is used to manage most of the tasks related to automatic image processing and imports and exports.To access the image loading interface, click on the “Images” tab.</li>
        <h4>  Import local files</h4>
        <li>  Simply load the files using drag-and-drop or click in the box to open the file explorer. Note: you must wait until all the images are loaded before refreshing the page! </li>
        <h4> Import images from PDF files</h4>
        <li> Click on the Import button, then Images (PDF) option to load a PDF file and automatically extract the images. Please note, only the images are imported. If the PDF contains a text layer corresponding to the transcription, it is not imported.</li>
        <h4>  Use an IIIF manifesto </h4>
        <li> Click on the “Manifesto” button to go to the IIIF Manifesto. This page allows you to load manifests and display them in a web browser. 
        Example: https://gallica.bnf.fr/iiif/ark:/12148/btv1b53026595r/manifest.json
         </li>
       </>,
      image: 'https://via.placeholder.com/150',
      video: ''
    }
  },

  {
    title: <h3>Manually annotate documents</h3>,  
    content: {    
      text: 
      <> 
    <h4>  Access the interface  </h4>
    <li> Manual annotation is necessary to generate ground truth data used to train models, or to correct the result of these operations. It can also be used as part of an annotation campaign that does not make use of Kraken models (eScriptorium only serves as an input environment).</li>
     <li>The document-parts edit tab allows you to create or modify annotation elements manually. It is accessed by clicking on the “Edit” tab at the top of the page or by clicking on the “Edit” button on each “map” representing a part-document. There are several viewing panes in this tab corresponding to each possible editing task.</li> 
      <li> “Image source” allows you to display the source image;</li>
      <li>“Segmentation” displays the segmentation editing pane;</li>
      <li>“Transcription” displays the editing pane of the transcription in diplomatic view;</li>
      <li>Text-Annotation” is used to display the editing pane of the transcription in text mode in order to modify the reading order or (soon) to annotate.</li>
      <h4>  Annotate segments and images </h4>
      <li>Drawing baselines corresponding to the locations of the text on the image in two ways:

      Free route (not recommended);
      Point by point plot. </li>
      <li>Adding points on a line (select it then double-click at the point’s location);</li>
      <li>Moving one or more point (s) by a simple select-drag;</li>
      <li>Deleting one or more point (s) on a line;</li>
      <li>Activating the calculation of the polygons associated with each line (this task is automatic and managed asynchronously without any action on the part of the user after the first use).</li>
      <li>In this pane, it is also possible to create regions (or zones ) and associate segments to them. A segment located within the perimeter of a region is therefore not automatically associated with it.</li>
      <li> All the operations that can be carried out in this pane are detailed in a help window (to display it, click on “?”). It will thus be noted that there are many shortcuts making it possible to simplify all these operations.</li>
       </>,
      image: 'https://via.placeholder.com/150',
      video: ''
    },
  },  
  {
    title: <h3>Annotate the transcript</h3>,
    content: {
      text: <><li> Only when there are segments and masks on the image is it possible to use the functionalities of the “Transcription” and “Text” tabs.</li>
          <li> To add or modify a transcription associated with a segment from the “Transcription” pane, click on the corresponding zone. An input window is displayed. To record a transcription, press “Enter”: the transcription interface automatically displays the input field for the next segment.</li>
          <li> As you type in the “Transcription” pane, the crenellated areas are replaced by text and the content of the “Text” pane changes. It is therefore also possible to modify the text from the “Text” pane and even to copy and paste several lines at once.</li>

          <h4>A note on the articulation of baselines, polygons and transcriptions</h4>
          <li> The baseline is the central element for storing information in the eScriptorium database. So :

It is possible to modify a baseline (remove / move / add points) without impacting the transcription;
The polygon is always calculated from the baseline, including during training
It is possible to modify the polygon manually (not recommended) without this impacting the transcription.
</li>
<li>During the training of the Kraken models, the calculation of the polygons can be reset: the user therefore has an interest in not intervening on the polygons and on the contrary to ensure that the baselines are drawn in such a way that the automatically generated polygons are correct. Moreover, when manually entering ground truth data, care should be taken to transcribe only what is inside the polygon.</li>
    <h4> Changing the order of segments </h4>
    <li> The playback order of the segments is calculated automatically. You can display the order number of each segment from the “Segmentation” pane by clicking on “Toggle ordering display (L)” or from the “Text” pane where the lines are displayed in the following order. </li>
    <li> It is possible to modify this order from the “Text” pane by clicking “Toggle sorting mode.” A simple drag and drop of the lines is then enough to carry out the modification. </li>
    <li>Note: it is advisable to ensure the quality of the segmentation before changing the order of the lines because adding or deleting lines systematically restarts the calculation of this order, overwriting manual modifications in the process. </li>
      </> ,
      image: 'https://escriptorium.openiti.org/login/',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  },
  {
    title: <h3>Changing the order of segments</h3>,
    content: {
      text: <><li> The playback order of the segments is calculated automatically. You can display the order number of each segment from the “Segmentation” pane by clicking on “Toggle ordering display (L)” or from the “Text” pane where the lines are displayed in the following order.</li>
      <li> It is possible to modify this order from the “Text” pane by clicking “Toggle sorting mode.” A simple drag and drop of the lines is then enough to carry out the modification. </li>
      <li> Note: it is advisable to ensure the quality of the segmentation before changing the order of the lines because adding or deleting lines systematically restarts the calculation of this order, overwriting manual modifications in the process. </li>
      <h4> Semantic annotation </h4>
      <li>It is possible to associate labels (or tags ) with segments and regions by following an ontology pre-defined by the user from the “Description” tab. There are default tags , but it is possible to add some using the input fields (click on “+” then “Update” to add the new tag to the list) or to delete (uncheck the box in front of the tag then click on “Update”).</li>
      <li> From the “Segmentation” pane, select an area or a segment, then click on “Set the type on all selected lines / regions (T)” and choose the appropriate tag . The color of the area or line changes.</li>
      <li>It is possible to apply a tag to several regions or segments at once: all you have to do is select several (Ctrl + click-drag or keep Ctrl pressed and click the targeted segments / regions).</li>
      
      </> ,
      image: 'https://escriptorium.openiti.org/login/',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  },
  {
    title: <h3>Import annotations</h3>,
    content: {
      text: <>
      <h4> Import structured annotations in XML </h4>
      <li> It is possible to import segments and / or a transcript generated outside of eScriptorium. To do this, in the “Images” tab, click on the “Import / Transcription (XML)” option. </li>
      <li> A form appears allowing you to specify a name to identify the version to import and to load the file to import. This can be an ALTO XML file, a PAGE XML file or a ZIP containing several ALTO or PAGE XML files.</li>
      <li> It is not necessary to select beforehand which document-parts are concerned by the import: the link is made automatically according to the information contained in the XML files. </li>
      <h4> Import annotations from plain text </h4> 
      <li>It is possible to manually import a transcription from a plain text version using the “Text” pane of the “Edit” tab. Each line break then indicates the passage to a new segment. It is therefore necessary to ensure that the reading order of the lines matches.</li>
      <li> The same procedure can be used to import annotations in the “Transcription” pane of the “Edit” tab. </li>
      <h4> Automatically annotate documents </h4>
      <h5> Instructions</h5>
        <li>Select the images to annotate;</li>
        <li>Click on “Segment” (for the detection of baselines, polygons and / or areas) or on “Transcribe” (for transcription);</li>
        <li>A form is displayed: it allows you to load a Kraken model or to use a model already available in eScriptorium and, for segmentation, to configure the annotation.</li>
        <h5> Setting up Segmentation</h5>
        <li>“Segmentation steps” allows you to manage what level of segmentation is carried out: </li>
        <li>“Line and Regions” leads to the generation of zones (provided that the model used has been trained for this), baselines and associated polygons.</li>
        <li>“Line Baselines and Masks” leads to the generation of baselines and associated polygons.</li>
        <li>“Only line Masks” does not require loading a model; this option allows you to reset on the fly the calculation of the polygons associated with the baselines already present on the images.</li>
        <li>“Regions” makes it possible to keep intact the baselines and polygons already present on the images and to generate only the zones.</li>
        <li>“Text direction” is used to indicate the reading direction of the lines.</li>
      </> ,
      image: 'https://escriptorium.openiti.org/login/',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  },

  {
    title: <h3>Train models</h3>,
    content: {
      text: <><li> Training of Kraken models is started from the “Images” tab; it is tracked from the “Models” tab (inactive as long as no model other than the default model is associated with the document). </li>
        <li>Access to training functions may be subject to authorization. It is managed from the administration interface.</li>
        <li>To train a model, all the mobilized images / annotations must be in the same document.</li>
        <li>Select the share documents containing the ground truth;</li>
        <li>Click on “Train” then select the type of model to train: “Segment” for a segmentation model, “Recognizer” for a transcription model;</li>
        <li>Fill out the form then click on “Train”;</li>
        <li>The training task is started, sometimes you have to wait before this is displayed.</li>
        <li>When the training is finished, the user receives a notification and can access the final model from the “Models” tab. It is then possible to download the model or use it on the document.</li>
        <h4>Refine a model or start from scratch?</h4>
        <li> If you want to start from scratch (simply indicate the name to give to the new model that will be created);</li>
        <li>Or if you want to refine a model (it can be loaded from the file manager, or be already present in the list of models associated with the current document).</li>
        <h4>Export annotations</h4>
        <li>Select the relevant part-documents;</li>
        <li>Click on “Export”;</li>
        <li>Specify the export format (“Alto” for XML ALTO, “Pagexml” for XML PAGE, or “Text” for plain text);</li>
        <li>Check “Include Images” if you also want to export the images;</li>
        <li>Click on Export and save the generated ZIP file.</li>
      </> ,
      image: 'https://escriptorium.openiti.org/login/',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  },

 
    
];    

const heights = [150, 300, 250, 200, 180, 220, 150, 200, 170, 250, 200];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  color: theme.palette.text.secondary,
}));

const Tutorial = () => {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const MasonryContainer = () => {
    return (
      <Box sx={{ width: '100%', minHeight: 377 }}>
        <Masonry columns={3} spacing={2}>
          {tutorialSteps.map((step, index) => (
            <Paper key={index}>
              <StyledAccordion sx={{ minHeight: heights[index] }}>
                <AccordionSummary>
                  <Typography>{step.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    {step.content.text && <Typography variant="body1" paragraph>{step.content.text}</Typography>}
                    {step.content.image && <img src={step.content.image} alt={`Step ${index}`} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />}
                    {step.content.video && <video controls style={{ width: '100%', height: 'auto' }}>
                      <source src={step.content.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>}
                  </div>
                </AccordionDetails>
              </StyledAccordion>
            </Paper>
          ))}
        </Masonry>
      </Box>
    );
  }

  function highlightText(text, query) {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} style={{ backgroundColor: '#ddd' }}>{part}</span>
    ) : (
      part
    ));
  }

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filter tutorial steps based on the search query
    const filteredResults = tutorialSteps.filter(step =>
      step.title.toLowerCase().includes(query.toLowerCase()) ||
      step.content.text.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <h1>Tutorial(From Hypotheses Documentation) </h1>
      {MasonryContainer()}
      <div>
        <h3>Search Results: {searchQuery}</h3>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{highlightText(result.title, searchQuery)} - {highlightText(result.content.text, searchQuery)}</li>
          ))}
        </ul> 
      </div>  
    </div>
  );
};

export default Tutorial;
