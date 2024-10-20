import islamicMas from './islamicMasr.jpg';
import hospital from './hospital-1-large.jpg';
import Algerias from './Algerias-Sonatrach-resumes-Skikda-LNG-production-768x426.jpg';
import nig from './nigir.jpg';
import hotel from './hotrl.jpeg';
import burgan from './burgan-bank.jpg';
import School from './2-South-Shore-High-School-large.jpg'
const col1 = "rgb(15 43 86)";
const col2 = 'rgb(239 65 64)';
export const Data = {
    MajorProjects: [
        {
            id: '1',
            img: islamicMas,
            title: 'MISR ISLAMIC CULTURE CENTER',
            subtitle: 'BMS, DDC, MCC, VSD, BUSWAY, DB',
            color: col1,
            ul: [
                {
                    strong: 'Location',
                    span: 'New Adminstrative Capital'
                },
                {
                    strong: 'Client',
                    span: 'Military Works Authority'
                },
                {
                    strong: 'Consultant',
                    span: 'ECG'
                },
            ]
        },
        {
            id: '2',
            img: hospital,
            title: 'SHARM EL SHEIKH INTERNATIONAL HOSPITAL',
            subtitle: 'BMS, DDC, MCC, VSD',
            color: col2,
            ul: [
                {
                    strong: 'Location',
                    span: 'Sharm El Sheikh'
                },
                {
                    strong: 'Consultant',
                    span: 'EDEC'
                },
            ]
        }
    ],
    Projectoutsideegypt: {
        ALGERIAPROJECTS: [
            {
                id: '1',
                img: Algerias,
                title: 'LIQUID NATURAL GAS SKIKDA',
                subtitle: '',
                color: col1,
                ul: [
                    {
                        strong: 'Location',
                        span: 'Algeria'
                    },
                    {
                        strong: 'Cosultant',
                        span: 'KBR'
                    },
                    {
                        strong: 'Classification',
                        span: 'BMS'
                    },
                    {
                        strong: 'Client',
                        span: 'Orascom'
                    },
                ]
            },
        ],
        PROJECTSiNNIGERIA: [
            {
                id: '1',
                img: nig,
                title: 'EGYPTIAN EMBASSY IN NIGERIA ',
                subtitle: 'BMS, MCC, VSD',
                color: col1,
                ul: [
                    {
                        strong: 'Client',
                        span: 'Arab Contractor'
                    },
                ]
            },
            {
                id: '2',
                img: hotel,
                title: 'IKO HOTEL - NIGERIA',
                subtitle: 'BMS, DDC, MCC & VSD',
                color: col2,
                ul: [
                    {
                        strong: 'Location',
                        span: 'Lagos'
                    },
                ]
            },
        ],
        PROJECTSINGULF: [
            {
                id: '1',
                img: burgan,
                title: 'BURGAN BANK',
                subtitle: 'BMS, DDC',
                color: col1,
                ul: [
                    {
                        strong: 'Location',
                        span: 'Kuwait City - Kuwait.'
                    },
                    {
                        strong: 'Year',
                        span: '2007'
                    },
                ]
            },
            {
                id: '2',
                img: School,
                title: 'SOUTH SURA SCHOOLS 4 SCHOOLS',
                subtitle: 'MCC, VSD, BMS, DDC',
                color: col2,
                ul: [
                    {
                        strong: 'Location',
                        span: 'Kuwait City - Kuwait.'
                    },
                    {
                        strong: 'Year',
                        span: '2007'
                    },
                ]
            },
        ],
    },

}