import './App.css';
import PDFReport from './PDFReport';

function App() {
  const inputs = [
    {
      mainTitle: 'Summit Survey Feedback',
      reportDate: 'Time period from 11th October to 14th October 2023',
      summaryText:
        "In the rapidly evolving landscape of digital communication, the collection and analysis of survey data have become increasingly important for gaining insights into consumer behavior, preferences, and trends. This report presents an in-depth analysis of a recently conducted survey, meticulously gathered through the widely-used communication platform, WhatsApp. While WhatsApp served merely as a tool for data collection, the richness of the dataset offers a unique opportunity to delve into the nuances of public opinion and sentiment. The objective of this analysis is not just to explore the what and how of the responses, but also to understand the why behind them. By dissecting various aspects of the data, from demographic specifics to nuanced responses, we aim to uncover patterns and correlations that can inform future strategies and decision-making processes.\n\nThe methodology behind the survey was designed to ensure a comprehensive and representative sample, thereby lending credibility and relevance to the findings. The survey encompassed a diverse range of questions, structured to elicit both qualitative and quantitative insights. As we navigate through the analysis, the report will highlight key themes that emerged, draw attention to significant statistical trends, and interpret the underlying sentiments expressed by the respondents. This holistic approach allows us to paint a detailed picture of the current landscape as perceived by the survey participants. The findings and interpretations presented in this report are intended to provide valuable guidance for businesses, organizations, and individuals looking to align their strategies with the pulse of their target audience. As we unpack the layers of data, we endeavor to offer actionable insights that resonate with the evolving dynamics of today's world.",
      notableQuoteText: 'Please help me find a job.',
      numberOfResponse: '20',
      numberOfSubscribers: '12',
      numberOfOptOuts: '3',
      suggestion:
        'Enhance Post-Training Support and Job Placement Services: The dataset reveals a notable desire among participants for assistance in finding employment post-training. This is evident from a direct quote, "Please help me find a job," highlighting the need for practical support beyond the educational aspect of the program. It would be beneficial to establish or strengthen partnerships with industry players in the hospitality and tourism sectors to facilitate job placements. Additionally, offering career guidance, resume-building workshops, and interview preparation sessions could significantly enhance the value of the training program for participants. These efforts can bridge the gap between training and employment, ensuring that the skills acquired by the trainees are effectively utilized in the workforce.',
      additionalSuggestion:
        "Refine Training with Ongoing Feedback: To enhance the training program's effectiveness, a structured feedback system should be established. Regular surveys and discussions will help identify and address areas needing improvement, such as course content, teaching methods, and training structure. This approach ensures the program remains dynamic and responsive to industry needs, enhancing both its quality and relevance.",
      conclusion:
        "The analysis of feedback from the hospitality and tourism training program participants highlights two critical areas for enhancement: job placement support and the incorporation of continuous feedback for program improvement. The recurrent request for assistance in securing employment post-training underscores a significant gap between the skills acquired and their practical application in the job market. Addressing this need through dedicated job placement services and career support would not only enhance the immediate value of the training for participants but also align the program's outcomes with the practical demands of the hospitality and tourism industry.\n\nIn parallel, the establishment of a structured feedback loop presents an opportunity to elevate the training program's effectiveness and relevance continually. By integrating regular participant feedback into the program's development process, the course content, teaching methodologies, and overall structure can be fine-tuned to meet the evolving needs of the industry and the expectations of the trainees. This proactive approach to incorporating feedback will ensure the program remains dynamic, participant-focused, and aligned with the latest industry trends and practices.",
    },
  ];

const generatePDF = async () => {
  try {
    const pdfBlob = await PDFReport(inputs); // Assuming PDFReport returns a Promise of a Blob
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `demo_Report.pdf`;
    link.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div className='App'>
      <header className='App-header'>
        <p>playing with pdfme</p>

        <button
          onClick={() => {
            generatePDF();
          }}
        >
          Download PDF
        </button>
      </header>
    </div>
  );
}

export default App;
