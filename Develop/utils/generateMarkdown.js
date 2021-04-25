// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  Table of Contents:
  1. [Project](#projects) 
  2. [Description](#description)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Credits](#credits)
  6. [License](#license)
  7. [Badges](#badges)
  8. [Features](#features)
  9. [Testing](#test)
  9. [Testing Link](#testlink)
  
  
  # ${data.project}<a name="projects"></a>


  ## ${data.Description}<a name="description"></a>



  ## ${data.Installation}<a name="installation"></a>


  ## ${data.Usage}<a name="usage"></a>
    ![Reflection of Current State](${data.Link})


  ## ${data.Credits}<a name="credits"></a>

  ## ${data.License}<a name="license"></a>

  ## ${data.Badges}<a name="badges"></a>

  ## ${data.Features}<a name="features"></a>



  ## ${data.Test}<a name="test"></a>
  ![Testing link](${data.TestLink})<a name="testlink"></a>
`;
}

module.exports = generateMarkdown;
