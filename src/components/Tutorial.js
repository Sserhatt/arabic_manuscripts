import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Masonry } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary, Typography,} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const tutorialSteps = [
  {
    title: <h3>Logging into eScriptorium</h3>,
    content: {
      text: (
        <>
          <p>You log into eScriptorium with an individual account made up of a login, a password, and an email address. An account is created by the user after receiving an invitation or by the site administrator.</p>
          <p>Once logged on, you will see the dashboard which allows you to manage all the documents created by and shared with the account. On first login, this dashboard is empty.</p>
        </>
      ),
    },
  },
  {
    title: <h3>Create a new document</h3>,
    content: {
      text: (
        <>
          <p>The “document” is a collection of images forming a whole unit;</p>
          <p>A “document-part” is an image—a page belonging to a document.</p>
          <h4>Instructions</h4>
          <p>To create a document, click on the “Create new” button; a new page is displayed as well as an input form:</p>
          <p>The “Name” field is mandatory. The others are optional and can be completed later. We will come back to the “Ontology” section later.</p>
          <p>Once the information has been entered, click on “Create” to create the document; a message is then displayed: “Document created successfully!” You can still modify the data entered: the “Create” button has been replaced by an “Update” button.</p>
        </>
      ),
    },
  },
  {
    title: <h3>Upload images</h3>,
    content: {
      text: (
        <>
          <h4>Access the interface</h4>
          <p>The “Images” interface is used to manage most of the tasks related to automatic image processing and imports and exports. To access the image loading interface, click on the “Images” tab.</p>
          <h4>Import local files</h4>
          <p>Simply load the files using drag-and-drop or click in the box to open the file explorer. Note: you must wait until all the images are loaded before refreshing the page!</p>
          <h4>Import images from PDF files</h4>
          <p>Click on the Import button, then Images (PDF) option to load a PDF file and automatically extract the images. Please note, only the images are imported. If the PDF contains a text layer corresponding to the transcription, it is not imported.</p>
          <h4>Use an IIIF manifesto</h4>
          <p>Click on the “Manifesto” button to go to the IIIF Manifesto</p>
        </>
      ),
    },
  },
  {
    title: <h3>Manually annotate documents</h3>,
    content: {
      text: (
        <>
          <h4>Access the interface</h4> 
          <br></br>
          <p>Manual annotation is necessary to generate ground truth data used to train models, or to correct the result of these operations. It can also be used as part of an annotation campaign that does not make use of Kraken models (eScriptorium only serves as an input environment).</p>
          <p>The document-parts edit tab allows you to create or modify annotation elements manually. It is accessed by clicking on the “Edit” tab at the top of the page or by clicking on the “Edit” button on each “map” representing a part-document. There are several viewing panes in this tab corresponding to each possible editing task.</p>
          <p>“Image source” allows you to display the source image;</p>
          <p>“Segmentation” displays the segmentation editing pane;</p>
          <p>“Transcription” displays the editing pane of the transcription in diplomatic view;</p>
          <p>Text-Annotation” is used to display the editing pane of the transcription in text mode in order to modify the reading order or (soon) to annotate.</p>
          <h4>Annotate segments and images</h4>
          <p>Drawing baselines corresponding to the locations of the text on the image in two ways:</p>
          <ul>
            <li>Free route (not recommended);</li>
            <li>Point by point plot.</li>
          </ul>
          <ul>
            <li>Adding points on a line (select it then double-click at the point’s location);</li>
            <li>Moving one or more points by a simple select-drag;</li>
            <li>Deleting one or more points on a line;</li>
            <li>Activating the calculation of the polygons associated with each line (this task is automatic and managed asynchronously without any action on the part of the user after the first use).</li>
            <li>In this pane, it is also possible to create regions (or zones) and associate segments with them. A segment located within the perimeter of a region is therefore not automatically associated with it.</li>
            <li>All the operations that can be carried out in this pane are detailed in a help window (to display it, click on “?”). It will thus be noted that there are many shortcuts making it possible to simplify all these operations.</li>
          </ul>
        </>
      ),
    },
  },
  {
    title: <h3>Annotate the transcript</h3>,
    content: {
      text: (
        <>
          <p>Only when there are segments and masks on the image is it possible to use the functionalities of the “Transcription” and “Text” tabs.</p>
          <p>To add or modify a transcription associated with a segment from the “Transcription” pane, click on the corresponding zone. An input window is displayed. To record a transcription, press “Enter”: the transcription interface automatically displays the input field for the next segment.</p>
          <p>As you type in the “Transcription” pane, the crenellated areas are replaced by text and the content of the “Text” pane changes. It is therefore also possible to modify the text from the “Text” pane and even to copy and paste several lines at once.</p>
          <h4>A note on the articulation of baselines, polygons and transcriptions</h4>
          <p>The baseline is the central element for storing information in the eScriptorium database. So:</p>
          <ul>
            <li>It is possible to modify a baseline (remove/move/add points) without impacting the transcription;</li>
            <li>The polygon is always calculated from the baseline, including during training;</li>
            <li>It is possible to modify the polygon manually (not recommended) without this impacting the transcription.</li>
          </ul>
          <p>During the training of the Kraken models, the calculation of the polygons can be reset: the user therefore has an interest in not intervening on the polygons and on the contrary to ensure that the baselines are drawn in such a way that the automatically generated polygons are correct. Moreover, when manually entering ground truth data, care should be taken to transcribe only what is inside the polygon.</p>
          <h4>Changing the order of segments</h4>
          <p>The playback order of the segments is calculated automatically. You can display the order number of each segment from the “Segmentation” pane by clicking on “Toggle ordering display (L)” or from the “Text” pane where the lines are displayed in the following order.</p>
          <p>It is possible to modify this order from the “Text” pane by clicking “Toggle sorting mode.” A simple drag and drop of the lines is then enough to carry out the modification.</p>
          <p>Note: it is advisable to ensure the quality of the segmentation before changing the order of the lines because adding or deleting lines systematically restarts the calculation of this order, overwriting manual modifications in the process.</p>
        </>
      ),
    },
  },
  {
    title: <h3>Changing the order of segments</h3>,
    content: {
      text: (
        <>
          <p>The playback order of the segments is calculated automatically. You can display the order number of each segment from the “Segmentation” pane by clicking on “Toggle ordering display (L)” or from the “Text” pane where the lines are displayed in the following order.</p>
          <p>It is possible to modify this order from the “Text” pane by clicking “Toggle sorting mode.” A simple drag and drop of the lines is then enough to carry out the modification.</p>
          <p>Note: it is advisable to ensure the quality of the segmentation before changing the order of the lines because adding or deleting lines systematically restarts the calculation of this order, overwriting manual modifications in the process.</p>
          <h4>Semantic annotation</h4>
          <p>It is possible to associate labels (or tags) with segments and regions by following an ontology pre-defined by the user from the “Description” tab. There are default tags, but it is possible to add some using the input fields (click on “+” then “Update” to add the new tag to the list) or to delete (uncheck the box in front of the tag then click on “Update”).</p>
          <p>From the “Segmentation” pane, select an area or a segment, then click on “Set the type on all selected lines/regions (T)” and choose the appropriate tag. The color of the area or line changes.</p>
          <p>It is possible to apply a tag to several regions or segments at once: all you have to do is select several (Ctrl + click-drag or keep Ctrl pressed and click the targeted segments/regions).</p>
        </>
      ),
    },
  },
  {
    title: <h3>Import annotations</h3>,
    content: {
      text: (
        <>
          <h4>Import structured annotations in XML</h4>
          <p>It is possible to import segments and/or a transcript generated outside of eScriptorium. To do this, in the “Images” tab, click on the “Import/Transcription (XML)” option.</p>
          <p>A form appears allowing you to specify a name to identify the version to import and to load the file to import. This can be an ALTO XML file, a PAGE XML file, or a ZIP containing several ALTO or PAGE XML files.</p>
          <p>It is not necessary to select beforehand which document-parts are concerned by the import: the link is made automatically according to the information contained in the XML files.</p>
          <h4>Import annotations from plain text</h4>
          <p>It is possible to manually import a transcription from a plain text version using the “Text” pane of the “Edit” tab. Each line break then indicates the passage to a new segment. It is therefore necessary to ensure that the reading order of the lines matches.</p>
          <p>The same procedure can be used to import annotations in the “Transcription” pane of the “Edit” tab.</p>
          <h4>Automatically annotate documents</h4>
          <h5>Instructions</h5>
          <p>Select the images to annotate;</p>
          <p>Click on “Segment” (for the detection of baselines, polygons, and/or areas) or on “Transcribe” (for transcription);</p>
          <p>A form is displayed: it allows you to load a Kraken model or to use a model already available in eScriptorium and, for segmentation, to configure the annotation.</p>
          <h5>Setting up Segmentation</h5>
          <ul>
            <li>“Segmentation steps” allows you to manage what level of segmentation is carried out:</li>
            <li>“Line and Regions” leads to the generation of zones (provided that the model used has been trained for this), baselines, and associated polygons.</li>
            <li>“Line Baselines and Masks” leads to the generation of baselines and associated polygons.</li>
            <li>“Only line Masks” does not require loading a model; this option allows you to reset on the fly the calculation of the polygons associated with the baselines already present on the images.</li>
            <li>“Regions” makes it possible to keep intact the baselines and polygons already present on the images and to generate only the zones.</li>
            <li>“Text direction” is used to indicate the reading direction of the lines.</li>
          </ul>
        </>
      ),
    },
  },
  {
    title: <h3>Train models</h3>,
    content: {
      text: (
        <>
          <p>Training of Kraken models is started from the “Images” tab; it is tracked from the “Models” tab (inactive as long as no model other than the default model is associated with the document).</p>
          <p>Access to training functions may be subject to authorization. It is managed from the administration interface.</p>
          <p>To train a model, all the mobilized images/annotations must be in the same document.</p>
          <p>Select the shared documents containing the ground truth;</p>
          <p>Click on “Train” then select the type of model to train: “Segment” for a segmentation model, “Recognizer” for a transcription model;</p>
          <p>Fill out the form then click on “Train”;</p>
          <p>The training task is started; sometimes you have to wait before this is displayed.</p>
          <p>When the training is finished, the user receives a notification and can access the final model from the “Models” tab. It is then possible to download the model or use it on the document.</p>
          <h4>Refine a model or start from scratch?</h4>
          <p>If you want to start from scratch (simply indicate the name to give to the new model that will be created);</p>
          <p>Or if you want to refine a model (it can be loaded from the file manager, or be already present in the list of models associated with the current document).</p>
          <h4>Export annotations</h4>
          <p>Select the relevant part-documents;</p>
          <p>Click on “Export”;</p>
          <p>Specify the export format (“Alto” for XML ALTO, “Pagexml” for XML PAGE, or “Text” for plain text);</p>
          <p>Check “Include Images” if you also want to export the images;</p>
          <p>Click on Export and save the generated ZIP file.</p>
        </>
      ),
    },
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
                  <Typography variant="body1" component="div">
                  {processJSX(step.content.text, searchQuery)}
                  </Typography>
                  </div>
                </AccordionDetails>
              </StyledAccordion>
            </Paper>
          ))}
        </Masonry>
      </Box>
    );
  };

  function highlightJSX(element, query) {
    if (!query || typeof element !== 'string') {
      return element;
    }

     // Split the text and apply highlights
  const parts = element.split(new RegExp(`(${query})`, 'gi'));

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} style={{ backgroundColor: '#ddd' }}>{part}</span>
    ) : (
      part
    )
  );
}

function processJSX(element, query) {
  if (typeof element === 'string') {
    return highlightJSX(element, query); 
  }

  if (React.isValidElement(element)) {
    return React.cloneElement(element, {
      children: React.Children.map(element.props.children, (child) =>
        processJSX(child, query)
      ),
    });
  }

  return element;
}

  return (
    <div>
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      <h1>Tutorial</h1>
      {MasonryContainer()}
      <div>
        <h3>Search Results: {searchQuery}</h3>
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              {highlightJSX(result.title, searchQuery)} - {highlightJSX(result.content.text, searchQuery)} - {result.content.split.map((part, index) => (
                <span key={index}>{highlightJSX(part, searchQuery)}</span>
              ))}
            </li>
          ))}
        </ul> 
      </div>  
      <div> <p> Source: https://lectaurep.hypotheses.org/documentation/escriptorium-tutorial-en</p> </div>
    </div>
  );
};

export default Tutorial;
