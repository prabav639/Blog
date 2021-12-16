import React from 'react'
import './style.css';
import Card from '../../components/UI/Card';

/**
* @author
* @function AboutMe
**/

export const AboutMe = (props) => {
  return(
      
      <section className="container">
          
    <Card>
        
            <h1><u>About me:</u></h1>
            
                <p>My name is Prabav Murali. I am doing my Master's in Computing & Data Analytics at SMU </p>
                <p>I studied my baccalaureate in CSE in Chennai.</p>
                <ul>
                <li> I worked as a data analyst intern at eNoah iSolution Pvt. Ltd. in Chennai</li>
                 <ul>
                     <p></p>
                     <li>As a data analyst intern, my responsibilty was to cleanse, analyse, visualize data to show vehicular visits at various tollbooths using pandas, numpy, matplotlib libraries of Python. I used jupyter notebook and spyder IDEs as tools to perform the tasks. After replacing the different null values with numpy's 'NaN', I used numpy to count the 'na' values and clean the dataset. I used label encoding on categorical variable 'Type of car' say, SUVs, Hatchbacks etc. to find the specific type of car crossing tollbooths and then visualise it using matplotlib.</li>
                    </ul>
                </ul>
                
        </Card> 
        

      </section>
    
   )

 }