// Legal & Technical Checklist Data
const CHECKLIST_DATA = {
  "Secured DSA": {
    "Maharashtra": [
      {
        "title": "Specialised Collaterals",
        "propertyTypes": [
          "Gaothan",
          "Gunthewari",
          "Grampanchayat Property",
          "R-Zone Properties",
          "Plot"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "Copy Title deed in favour of borrower (In LAP cases)",
            "checks": {
              "Gaothan": true,
              "Gunthewari": true,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_2",
            "name": "Copy of Minimum 13 years title chain documents",
            "checks": {
              "Gaothan": true,
              "Gunthewari": true,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_3",
            "name": "Copy Gaothan certificate/Dakhla (If Available)*",
            "checks": {
              "Gaothan": true,
              "Gunthewari": false,
              "Grampanchayat Property": false,
              "R-Zone Properties": false,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_4",
            "name": "Copy Gunthewari Certificates issued up to 2008. (2009 to 2015: - Will be decisioned case to case basis)",
            "checks": {
              "Gaothan": false,
              "Gunthewari": true,
              "Grampanchayat Property": false,
              "R-Zone Properties": false,
              "Plot": false
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_5",
            "name": "R Zone Certificate",
            "checks": {
              "Gaothan": false,
              "Gunthewari": true,
              "Grampanchayat Property": false,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_6",
            "name": "13 years assessment / Namuna 8",
            "checks": {
              "Gaothan": true,
              "Gunthewari": false,
              "Grampanchayat Property": false,
              "R-Zone Properties": false,
              "Plot": false
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_7",
            "name": "Four Boundaries/Chatursimha Certificate issued by Grampanchayat (if applicable only for Chatursimha)",
            "checks": {
              "Gaothan": true,
              "Gunthewari": false,
              "Grampanchayat Property": true,
              "R-Zone Properties": false,
              "Plot": false
            },
            "legalStage": "Login",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_8",
            "name": "Four boundaries of collateral should be mentioned in sale deed/architect plan.",
            "checks": {
              "Gaothan": false,
              "Gunthewari": false,
              "Grampanchayat Property": false,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_9",
            "name": "7/12 extract or Property card wherever applicable",
            "checks": {
              "Gaothan": false,
              "Gunthewari": true,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_10",
            "name": "Mutation (Ferfar) letter passed by GP resolution/Municaipl corporation (wherever applicable)",
            "checks": {
              "Gaothan": true,
              "Gunthewari": true,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_11",
            "name": "N.A. Order/Permission or One time premium paid receipt as per new Maharashtra Amendment Act",
            "checks": {
              "Gaothan": false,
              "Gunthewari": false,
              "Grampanchayat Property": true,
              "R-Zone Properties": false,
              "Plot": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_12",
            "name": "Latest Utility Bills (electricity/water/gas connection) for proof of address on the name of borrower/previous sellers name",
            "checks": {
              "Gaothan": true,
              "Gunthewari": true,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_13",
            "name": "Latest Property tax receipt with No dues",
            "checks": {
              "Gaothan": true,
              "Gunthewari": true,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_14",
            "name": "Approved plan and C.C. copy from GP/competent authority or Architect plan (If applicable)",
            "checks": {
              "Gaothan": true,
              "Gunthewari": true,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_15",
            "name": "Flat- Occupation/Completion certificate copy (if applicable)",
            "checks": {
              "Gaothan": false,
              "Gunthewari": false,
              "Grampanchayat Property": true,
              "R-Zone Properties": false,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_16",
            "name": "Land title search report copy. (Applicable in Builder/Resale Flat Purchase case)",
            "checks": {
              "Gaothan": false,
              "Gunthewari": false,
              "Grampanchayat Property": true,
              "R-Zone Properties": false,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_17",
            "name": "No Litigation and encumbrance affidavit signed by all borrowers.",
            "checks": {
              "Gaothan": false,
              "Gunthewari": false,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Post Disbursement",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_18",
            "name": "Registered Mortgage to be executed.",
            "checks": {
              "Gaothan": true,
              "Gunthewari": true,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Post Disbursement",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_19",
            "name": "Lien mark/mortgage intimation.",
            "checks": {
              "Gaothan": true,
              "Gunthewari": false,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Post Disbursement",
            "technicalStage": "Not Applicable"
          }
        ]
      },
      {
        "title": "Standard Collaterals",
        "propertyTypes": [
          "Builder Purchase",
          "Resale Purchase/LAP",
          "MHADA/PMRDA",
          "MIDC",
          "CIDCO",
          "SRA"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "Copy registered ATS/Sale deed/Draft",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": true,
              "MIDC": true,
              "CIDCO": true,
              "SRA": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_2",
            "name": "Copy of Minimum 13 years title chain documents",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": true,
              "MIDC": true,
              "CIDCO": true,
              "SRA": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_3",
            "name": "Agreement to Lease and Lease Deed of the mortgagor along with RR and Index II",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": true,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_4",
            "name": "Sale deed and Transfer Letter in case of Resale/transfer of ownership",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": true,
              "MIDC": false,
              "CIDCO": true,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_5",
            "name": "Allotment / Deed of assignment in f/o borrower",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": true,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_6",
            "name": "Lease Agreement copy (if common allotment then reg.copy)",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": true,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_7",
            "name": "Lease deed in f/o lessee/Society/owner by MIDC",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": true,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_8",
            "name": "Development Agreement and Power of Attorney (Wherever Applicable)",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_9",
            "name": "Org. Tripartite Agreement between owner, MIDC & Bank/NBFC (if applicable)",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": true,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_10",
            "name": "Tripartite Agreement between CIDCO, the original Project Affected Person (PAP) or allottee, and a third-party builder or purchaser.",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": true,
              "SRA": false
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_11",
            "name": "Provisional and Final Allotment Letter by Govt Auhtority (LAP)",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": true,
              "MIDC": false,
              "CIDCO": false,
              "SRA": true
            },
            "legalStage": "Login",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_12",
            "name": "Provisional and Final Allotment Letter by Govt Auhtority (HL)",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": true,
              "MIDC": false,
              "CIDCO": false,
              "SRA": true
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_13",
            "name": "Allotment letter from Builder",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_14",
            "name": "LAP- Alternative accommodation agreement (In SRA Redevelopment) (If applicable)",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_15",
            "name": "HL- Alternative accommodation agreement (In SRA Redevelopment) (If applicable)",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_16",
            "name": "Builder or Society NOC.",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_17",
            "name": "Mortgage NOC from Society (If society formed)",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": false,
              "MIDC": true,
              "CIDCO": true,
              "SRA": true
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_18",
            "name": "MHADA NOC / Society NOC whichever is applicable",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": true,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_19",
            "name": "Mortgage NOC from Govt. Authority",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": true,
              "CIDCO": true,
              "SRA": true
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_20",
            "name": "7/12, in the name of Land Owner / Developer / Society.",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_21",
            "name": "RERA Registration wherever applicable",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_22",
            "name": "Society registration certificate, if Share certificate not issued",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": true,
              "MIDC": true,
              "CIDCO": true,
              "SRA": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_23",
            "name": "Share Certificate if issued",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": true,
              "MIDC": true,
              "CIDCO": true,
              "SRA": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_24",
            "name": "Commencement Certificate and Completion Certificate",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": true,
              "MIDC": true,
              "CIDCO": true,
              "SRA": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_25",
            "name": "Own Contribution payment receipts",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_26",
            "name": "Construction Plan & permission copy from concern Authority",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": true,
              "MIDC": true,
              "CIDCO": true,
              "SRA": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_27",
            "name": "Transfer Letter & Fees Paid- LAP",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": true,
              "CIDCO": false,
              "SRA": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_28",
            "name": "Transfer Letter & Fees Paid- HL",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": true,
              "CIDCO": false,
              "SRA": true
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_29",
            "name": "Occupation certificate copy- LAP",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": true,
              "CIDCO": false,
              "SRA": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          }
        ]
      }
    ],
    "Madhya Pradesh": [
      {
        "title": "Standard Checklist",
        "propertyTypes": [
          "Nagar Palika/Parishad Ledger",
          "Notarized Sale deed properties",
          "Patta Properties Pradesh",
          "Lease Hold Properties",
          "Colony",
          "Flats/Apartments in Multistorey buildings",
          "Private Khasra property"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "13 years of tax Ledger (Previous owners tax ledger is required)",
            "checks": {
              "Nagar Palika/Parishad Ledger": true,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_2",
            "name": "Copy of Registered Deed- Co-ownership/Gift Deed or old sale deed",
            "checks": {
              "Nagar Palika/Parishad Ledger": true,
              "Notarized Sale deed properties": true,
              "Patta Properties Pradesh": true,
              "Lease Hold Properties": false,
              "Colony": true,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_3",
            "name": "NOC of Nagar Palika / Nagar Parishad to be collect",
            "checks": {
              "Nagar Palika/Parishad Ledger": true,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Cheque Handover",
            "technicalStage": "Cheque Handover"
          },
          {
            "id": "doc_4",
            "name": "Latest Electricity bills on the name of borrower",
            "checks": {
              "Nagar Palika/Parishad Ledger": true,
              "Notarized Sale deed properties": true,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_5",
            "name": "Copy of Registered Mortgage in co-ownership deed. EM in Sale/Gift Deed",
            "checks": {
              "Nagar Palika/Parishad Ledger": true,
              "Notarized Sale deed properties": true,
              "Patta Properties Pradesh": true,
              "Lease Hold Properties": true,
              "Colony": true,
              "Flats/Apartments in Multistorey buildings": true,
              "Private Khasra property": true
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Legal Vetting"
          },
          {
            "id": "doc_6",
            "name": "Notarized sale agreement(5 years old)",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": true,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_7",
            "name": "Drone Khasra & Tahsil Patta",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": true,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_8",
            "name": "Latest Property tax bill with paid receipt at submitted before cheque handover",
            "checks": {
              "Nagar Palika/Parishad Ledger": true,
              "Notarized Sale deed properties": true,
              "Patta Properties Pradesh": true,
              "Lease Hold Properties": true,
              "Colony": true,
              "Flats/Apartments in Multistorey buildings": true,
              "Private Khasra property": false
            },
            "legalStage": "Cheque Handover",
            "technicalStage": "Cheque Handover"
          },
          {
            "id": "doc_9",
            "name": "NOC of Gram Panchayat to be collect",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": true,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Cheque Handover",
            "technicalStage": "Cheque Handover"
          },
          {
            "id": "doc_10",
            "name": "Lease Deed",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": true,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_11",
            "name": "NOC issued by MPHB/IDA/UDA",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": true,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Cheque Handover",
            "technicalStage": "Cheque Handover"
          },
          {
            "id": "doc_12",
            "name": "Mutation certificate",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": true,
              "Colony": true,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": true
            },
            "legalStage": "Cheque Handover",
            "technicalStage": "Cheque Handover"
          },
          {
            "id": "doc_13",
            "name": "TNCP & RERA certificate",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": true,
              "Flats/Apartments in Multistorey buildings": true,
              "Private Khasra property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_14",
            "name": "Khasra Records",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": true,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_15",
            "name": "Declaration Deed / Prakosht",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": true,
              "Private Khasra property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_16",
            "name": "Diversion order / Avashiya khasra / Applied receipt",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_17",
            "name": "Patwari trace map/private layout plan",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_18",
            "name": "Latest Notarized sale agreement",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": true,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_19",
            "name": "Nazariya Naksha to be documented",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": true,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          }
        ]
      }
    ],
    "Gujarat": [
      {
        "title": "Gujarat Checklist",
        "propertyTypes": [
          "Society Allotment Cases",
          "commercial Property purchase direct from Builder/ Developer",
          "Resale commercial Property purchase",
          "Gujarat Housing Board Properties",
          "Gujarat Industrial Development Corporation Properties",
          "Suchit/Regularized property/Sanand",
          "Plot (Plus Construction)",
          "Gram Panchayat (Gamtal Property) - within development authority"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "Copy of village for 7/12/property card in the name of Co-op. Society/Non Trading Corp./Seller.",
            "checks": {
              "Society Allotment Cases": true,
              "commercial Property purchase direct from Builder/ Developer": true,
              "Resale commercial Property purchase": true,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": false,
              "Plot (Plus Construction)": true,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_2",
            "name": "Copy of registered Title Deeds - ATS & Sale Deed",
            "checks": {
              "Society Allotment Cases": true,
              "commercial Property purchase direct from Builder/ Developer": true,
              "Resale commercial Property purchase": true,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": true,
              "Suchit/Regularized property/Sanand": false,
              "Plot (Plus Construction)": true,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_3",
            "name": "Copy of Registration certificate of Co-op. Society/Non Trading Corp. (if society formed)",
            "checks": {
              "Society Allotment Cases": true,
              "commercial Property purchase direct from Builder/ Developer": false,
              "Resale commercial Property purchase": true,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": false,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_4",
            "name": "NA order copy",
            "checks": {
              "Society Allotment Cases": true,
              "commercial Property purchase direct from Builder/ Developer": true,
              "Resale commercial Property purchase": true,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": false,
              "Plot (Plus Construction)": true,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_5",
            "name": "Copy of Layout Plan and building permission approved by competent authority",
            "checks": {
              "Society Allotment Cases": true,
              "commercial Property purchase direct from Builder/ Developer": true,
              "Resale commercial Property purchase": true,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": false,
              "Plot (Plus Construction)": true,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_6",
            "name": "Allotment Letter",
            "checks": {
              "Society Allotment Cases": true,
              "commercial Property purchase direct from Builder/ Developer": false,
              "Resale commercial Property purchase": false,
              "Gujarat Housing Board Properties": true,
              "Gujarat Industrial Development Corporation Properties": true,
              "Suchit/Regularized property/Sanand": false,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_7",
            "name": "share certificate (if issued) with all endorsements",
            "checks": {
              "Society Allotment Cases": true,
              "commercial Property purchase direct from Builder/ Developer": false,
              "Resale commercial Property purchase": true,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": false,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_8",
            "name": "prior registered chain title deed & Docs(if any) -- in case of resale",
            "checks": {
              "Society Allotment Cases": true,
              "commercial Property purchase direct from Builder/ Developer": false,
              "Resale commercial Property purchase": true,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": false,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_9",
            "name": "Permission to transfer and mortgage from Society",
            "checks": {
              "Society Allotment Cases": true,
              "commercial Property purchase direct from Builder/ Developer": false,
              "Resale commercial Property purchase": true,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": false,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_10",
            "name": "Dy collector order for deficit stamp duty",
            "checks": {
              "Society Allotment Cases": true,
              "commercial Property purchase direct from Builder/ Developer": false,
              "Resale commercial Property purchase": false,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": false,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_11",
            "name": "RERA Certificate if applicable",
            "checks": {
              "Society Allotment Cases": false,
              "commercial Property purchase direct from Builder/ Developer": true,
              "Resale commercial Property purchase": false,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": false,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_12",
            "name": "Permission to mortgage (PTM) from Builder/Developer",
            "checks": {
              "Society Allotment Cases": false,
              "commercial Property purchase direct from Builder/ Developer": true,
              "Resale commercial Property purchase": false,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": false,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_13",
            "name": "Registered Conveyance/ lease deed",
            "checks": {
              "Society Allotment Cases": false,
              "commercial Property purchase direct from Builder/ Developer": false,
              "Resale commercial Property purchase": false,
              "Gujarat Housing Board Properties": true,
              "Gujarat Industrial Development Corporation Properties": true,
              "Suchit/Regularized property/Sanand": false,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_14",
            "name": "GHB NOC to mortgage - applicable subject to clause as per lease deed/conveyance deed",
            "checks": {
              "Society Allotment Cases": false,
              "commercial Property purchase direct from Builder/ Developer": false,
              "Resale commercial Property purchase": false,
              "Gujarat Housing Board Properties": true,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": false,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_15",
            "name": "Registered Agreement to lease - Lease Deed by GIDC in favour of Borrower with R.R.",
            "checks": {
              "Society Allotment Cases": false,
              "commercial Property purchase direct from Builder/ Developer": false,
              "Resale commercial Property purchase": false,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": true,
              "Suchit/Regularized property/Sanand": false,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_16",
            "name": "Original 2(R) Permission issued by Gujarat Industrial Development Corporation in favour of Borrower and BANK.",
            "checks": {
              "Society Allotment Cases": false,
              "commercial Property purchase direct from Builder/ Developer": false,
              "Resale commercial Property purchase": false,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": true,
              "Suchit/Regularized property/Sanand": false,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_17",
            "name": "Municipal Corporation Regularisation order",
            "checks": {
              "Society Allotment Cases": false,
              "commercial Property purchase direct from Builder/ Developer": false,
              "Resale commercial Property purchase": false,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": true,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_18",
            "name": "Mamlatdar issued settlement order",
            "checks": {
              "Society Allotment Cases": false,
              "commercial Property purchase direct from Builder/ Developer": false,
              "Resale commercial Property purchase": false,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": true,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_19",
            "name": "No Claim - No Due Certificate",
            "checks": {
              "Society Allotment Cases": false,
              "commercial Property purchase direct from Builder/ Developer": false,
              "Resale commercial Property purchase": false,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": true,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_20",
            "name": "Property card in borrowers name",
            "checks": {
              "Society Allotment Cases": false,
              "commercial Property purchase direct from Builder/ Developer": false,
              "Resale commercial Property purchase": false,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": true,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_21",
            "name": "impact fee",
            "checks": {
              "Society Allotment Cases": false,
              "commercial Property purchase direct from Builder/ Developer": false,
              "Resale commercial Property purchase": false,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": true,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_22",
            "name": "Sketch with 4 boundaries by City Survey office",
            "checks": {
              "Society Allotment Cases": false,
              "commercial Property purchase direct from Builder/ Developer": false,
              "Resale commercial Property purchase": false,
              "Gujarat Housing Board Properties": false,
              "Gujarat Industrial Development Corporation Properties": false,
              "Suchit/Regularized property/Sanand": true,
              "Plot (Plus Construction)": false,
              "Gram Panchayat (Gamtal Property) - within development authority": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          }
        ]
      }
    ],
    "Delhi": [
      {
        "title": "Delhi Checklist",
        "propertyTypes": [
          "Approved/MC Limit",
          "Regularized",
          "Provisionally Regularized / PM Uday Scheme",
          "Village abadi/ Urbanized",
          "Lal Dora Abadi",
          "Khasra properties",
          "Delhi 6/Old city area",
          "MDUs / Developer Unit",
          "Plot",
          "U/C properties",
          "Commercial Purchase",
          "Freehold Property",
          "Leasehold Property",
          "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)",
          "Industrial Property"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "Copy Title deed in favour of borrower (In LAP cases)",
            "checks": {
              "Approved/MC Limit": true,
              "Regularized": true,
              "Provisionally Regularized / PM Uday Scheme": true,
              "Village abadi/ Urbanized": true,
              "Lal Dora Abadi": true,
              "Khasra properties": true,
              "Delhi 6/Old city area": true,
              "MDUs / Developer Unit": true,
              "Plot": true,
              "U/C properties": true,
              "Commercial Purchase": true,
              "Freehold Property": true,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Not Applicable",
            "technicalStage": "Login"
          },
          {
            "id": "doc_2",
            "name": "Sanction Building Plan (Age less than 07 Years for Residential and 10 years for Others)",
            "checks": {
              "Approved/MC Limit": true,
              "Regularized": true,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": false,
              "Khasra properties": false,
              "Delhi 6/Old city area": true,
              "MDUs / Developer Unit": true,
              "Plot": false,
              "U/C properties": true,
              "Commercial Purchase": false,
              "Freehold Property": true,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": false,
              "Industrial Property": true
            },
            "legalStage": "Not Applicable",
            "technicalStage": "If Applicable"
          },
          {
            "id": "doc_3",
            "name": "Occupation Certificate / Completion Certificate (Age less than 05 Years in Independent house/ Floors and mandatory in projects)",
            "checks": {
              "Approved/MC Limit": true,
              "Regularized": true,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": false,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": true,
              "Plot": false,
              "U/C properties": "✓ (Post Completion)",
              "Commercial Purchase": false,
              "Freehold Property": false,
              "Leasehold Property": false,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": false,
              "Industrial Property": true
            },
            "legalStage": "Not Applicable",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_4",
            "name": "Property Tax Receipt / Electricity Bill",
            "checks": {
              "Approved/MC Limit": true,
              "Regularized": true,
              "Provisionally Regularized / PM Uday Scheme": true,
              "Village abadi/ Urbanized": true,
              "Lal Dora Abadi": true,
              "Khasra properties": true,
              "Delhi 6/Old city area": true,
              "MDUs / Developer Unit": true,
              "Plot": false,
              "U/C properties": "✓ Common Electricity Connection",
              "Commercial Purchase": true,
              "Freehold Property": true,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_5",
            "name": "PM Uday Cell Authorization Slip/Conveyance Deed",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": true,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": false,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": true,
              "Leasehold Property": false,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": false,
              "Industrial Property": true
            },
            "legalStage": "Not Applicable",
            "technicalStage": "Login"
          },
          {
            "id": "doc_6",
            "name": "Lease deed in Noida/Greater Noida",
            "checks": {
              "Approved/MC Limit": true,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": false,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": true,
              "Plot": true,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": false,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": false,
              "Industrial Property": true
            },
            "legalStage": "Not Applicable",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_7",
            "name": "If Property is listed in MC Demolition - Regularization receipt must be taken",
            "checks": {
              "Approved/MC Limit": true,
              "Regularized": true,
              "Provisionally Regularized / PM Uday Scheme": true,
              "Village abadi/ Urbanized": true,
              "Lal Dora Abadi": true,
              "Khasra properties": true,
              "Delhi 6/Old city area": true,
              "MDUs / Developer Unit": true,
              "Plot": false,
              "U/C properties": true,
              "Commercial Purchase": true,
              "Freehold Property": true,
              "Leasehold Property": false,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": false,
              "Industrial Property": true
            },
            "legalStage": "Not Applicable",
            "technicalStage": "If Applicable"
          },
          {
            "id": "doc_8",
            "name": "Sale Deed (Registered) – Primary proof of ownership",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": true,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": true,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_9",
            "name": "Previous Chain of Title Documents (15–30 years)",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": true,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": true,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_10",
            "name": "Identity Proof of Owner",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": true,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": true,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_11",
            "name": "Mutation Letter",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": false,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": true,
              "Leasehold Property": false,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_12",
            "name": "Possession Letter",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": true,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": true,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_13",
            "name": "Electricity & Water Bills",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": true,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": true,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_14",
            "name": "Sale Deed / Lease Deed",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": true,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": true,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_15",
            "name": "Khasra and Khatauni Records (land revenue records)",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": false,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": true,
              "Leasehold Property": false,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_16",
            "name": "Jamabandi (ownership record)",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": false,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": true,
              "Leasehold Property": false,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_17",
            "name": "General Power of Attorney (GPA) / Agreement to Sell (older transactions)",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": true,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": true,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_18",
            "name": "Mutation Certificate (MCD/DDA records)",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": false,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": false,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_19",
            "name": "Perpetual Lease Deed / Lease Agreement",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": false,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": false,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_20",
            "name": "Conveyance Deed (if converted to freehold)",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": true,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": false,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": true,
              "Industrial Property": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_21",
            "name": "Permission from Lessor (DDA/L&DO) for transfer",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": true,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": false,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_22",
            "name": "Allotment Letter (for DDA/Builder projects)",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": false,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": false,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_23",
            "name": "Possession Proof",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": false,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": false,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_24",
            "name": "Transfer Letter",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": false,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": false,
              "Leasehold Property": true,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_25",
            "name": "Mutation Certificate (MCD/DDA records)",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": true,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": false,
              "Leasehold Property": false,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_26",
            "name": "Commercial Land Use Approval (Zoning clearance)",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": false,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": false,
              "Leasehold Property": false,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_27",
            "name": "Land Use Certificate",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": false,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": false,
              "Leasehold Property": false,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_28",
            "name": "Lal Dora Certificate",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": true,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": false,
              "Leasehold Property": false,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_29",
            "name": "Share Certificate (for societies)",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": false,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": false,
              "Leasehold Property": false,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_30",
            "name": "No Objection Certificate (NOC) from Society",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Provisionally Regularized / PM Uday Scheme": false,
              "Village abadi/ Urbanized": false,
              "Lal Dora Abadi": false,
              "Khasra properties": false,
              "Delhi 6/Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": false,
              "Leasehold Property": false,
              "Residential Property (DDA Flats/HUDA/ GNIDA Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          }
        ]
      }
    ],
    "Puducherry / PCH": [
      {
        "title": "PCH Checklist",
        "propertyTypes": [
          "MC Limit area",
          "Regularized areas",
          "Devepolment authority >> PUDA",
          "Outside MC-Village Abaadi",
          "Lal Dora Abaadi-MC",
          "RERA Approved Projects",
          "Vacant / Open Plot",
          "U/C properties",
          "Commercial Purchase",
          "Khata & Khasra Property Punjab , Haryana ,Himachal( Residential , Commercial , Industrial,Special Property, Plot etc)",
          "Commercial/Industrial Purchase Case (Khata Khasra Property)",
          "Commercial/Industrial Purchase Case Authority/Builder /Society",
          "Development Authority Property /Society / PUDA / GMADA /HUDA/GLADA/HIMUDA? Improvement Trust/ Builder/Society/Chandigarh Authority/Chandigarh Housing Board Property."
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "Copy Title deed in favour of borrower",
            "checks": {
              "MC Limit area": true,
              "Regularized areas": true,
              "Devepolment authority >> PUDA": true,
              "Outside MC-Village Abaadi": true,
              "Lal Dora Abaadi-MC": true,
              "RERA Approved Projects": true,
              "Vacant / Open Plot": true,
              "U/C properties": true,
              "Commercial Purchase": true,
              "Khata & Khasra Property Punjab , Haryana ,Himachal( Residential , Commercial , Industrial,Special Property, Plot etc)": true,
              "Commercial/Industrial Purchase Case (Khata Khasra Property)": true,
              "Commercial/Industrial Purchase Case Authority/Builder /Society": true,
              "Development Authority Property /Society / PUDA / GMADA /HUDA/GLADA/HIMUDA? Improvement Trust/ Builder/Society/Chandigarh Authority/Chandigarh Housing Board Property.": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_2",
            "name": "Sanction Building Plan / Building approved Map, If vacant plot lies in DA-Required colony layout map (Age less than 05 Years for Residential / Commercial and Industrial )",
            "checks": {
              "MC Limit area": true,
              "Regularized areas": true,
              "Devepolment authority >> PUDA": true,
              "Outside MC-Village Abaadi": false,
              "Lal Dora Abaadi-MC": false,
              "RERA Approved Projects": true,
              "Vacant / Open Plot": false,
              "U/C properties": true,
              "Commercial Purchase": true,
              "Khata & Khasra Property Punjab , Haryana ,Himachal( Residential , Commercial , Industrial,Special Property, Plot etc)": false,
              "Commercial/Industrial Purchase Case (Khata Khasra Property)": false,
              "Commercial/Industrial Purchase Case Authority/Builder /Society": false,
              "Development Authority Property /Society / PUDA / GMADA /HUDA/GLADA/HIMUDA? Improvement Trust/ Builder/Society/Chandigarh Authority/Chandigarh Housing Board Property.": false
            },
            "legalStage": "Not Applicable",
            "technicalStage": "If Applicable"
          },
          {
            "id": "doc_3",
            "name": "Property Tax Receipt / Electricity Bill",
            "checks": {
              "MC Limit area": true,
              "Regularized areas": true,
              "Devepolment authority >> PUDA": true,
              "Outside MC-Village Abaadi": "✓(E-bill Only)",
              "Lal Dora Abaadi-MC": true,
              "RERA Approved Projects": true,
              "Vacant / Open Plot": false,
              "U/C properties": "✓ Post Completion",
              "Commercial Purchase": true,
              "Khata & Khasra Property Punjab , Haryana ,Himachal( Residential , Commercial , Industrial,Special Property, Plot etc)": true,
              "Commercial/Industrial Purchase Case (Khata Khasra Property)": true,
              "Commercial/Industrial Purchase Case Authority/Builder /Society": true,
              "Development Authority Property /Society / PUDA / GMADA /HUDA/GLADA/HIMUDA? Improvement Trust/ Builder/Society/Chandigarh Authority/Chandigarh Housing Board Property.": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_4",
            "name": "TS-1 / NOC from MC, Regarding NO due – LA more than 50 Lac ( Ludhiana & nearby )",
            "checks": {
              "MC Limit area": true,
              "Regularized areas": false,
              "Devepolment authority >> PUDA": false,
              "Outside MC-Village Abaadi": false,
              "Lal Dora Abaadi-MC": true,
              "RERA Approved Projects": false,
              "Vacant / Open Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Khata & Khasra Property Punjab , Haryana ,Himachal( Residential , Commercial , Industrial,Special Property, Plot etc)": false,
              "Commercial/Industrial Purchase Case (Khata Khasra Property)": false,
              "Commercial/Industrial Purchase Case Authority/Builder /Society": false,
              "Development Authority Property /Society / PUDA / GMADA /HUDA/GLADA/HIMUDA? Improvement Trust/ Builder/Society/Chandigarh Authority/Chandigarh Housing Board Property.": false
            },
            "legalStage": "Not Applicable",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_5",
            "name": "Jamabandi / Fard / Intkaal (Revenue records)-13 years",
            "checks": {
              "MC Limit area": false,
              "Regularized areas": false,
              "Devepolment authority >> PUDA": false,
              "Outside MC-Village Abaadi": false,
              "Lal Dora Abaadi-MC": false,
              "RERA Approved Projects": false,
              "Vacant / Open Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Khata & Khasra Property Punjab , Haryana ,Himachal( Residential , Commercial , Industrial,Special Property, Plot etc)": true,
              "Commercial/Industrial Purchase Case (Khata Khasra Property)": true,
              "Commercial/Industrial Purchase Case Authority/Builder /Society": false,
              "Development Authority Property /Society / PUDA / GMADA /HUDA/GLADA/HIMUDA? Improvement Trust/ Builder/Society/Chandigarh Authority/Chandigarh Housing Board Property.": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_6",
            "name": "ATS ( Agreement to Sell)",
            "checks": {
              "MC Limit area": false,
              "Regularized areas": false,
              "Devepolment authority >> PUDA": false,
              "Outside MC-Village Abaadi": false,
              "Lal Dora Abaadi-MC": false,
              "RERA Approved Projects": false,
              "Vacant / Open Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Khata & Khasra Property Punjab , Haryana ,Himachal( Residential , Commercial , Industrial,Special Property, Plot etc)": false,
              "Commercial/Industrial Purchase Case (Khata Khasra Property)": true,
              "Commercial/Industrial Purchase Case Authority/Builder /Society": true,
              "Development Authority Property /Society / PUDA / GMADA /HUDA/GLADA/HIMUDA? Improvement Trust/ Builder/Society/Chandigarh Authority/Chandigarh Housing Board Property.": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_7",
            "name": "Legal Search Authority letter with KYC of Property owner",
            "checks": {
              "MC Limit area": false,
              "Regularized areas": false,
              "Devepolment authority >> PUDA": false,
              "Outside MC-Village Abaadi": false,
              "Lal Dora Abaadi-MC": false,
              "RERA Approved Projects": false,
              "Vacant / Open Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Khata & Khasra Property Punjab , Haryana ,Himachal( Residential , Commercial , Industrial,Special Property, Plot etc)": false,
              "Commercial/Industrial Purchase Case (Khata Khasra Property)": false,
              "Commercial/Industrial Purchase Case Authority/Builder /Society": true,
              "Development Authority Property /Society / PUDA / GMADA /HUDA/GLADA/HIMUDA? Improvement Trust/ Builder/Society/Chandigarh Authority/Chandigarh Housing Board Property.": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          }
        ]
      }
    ],
    "Rajasthan": [
      {
        "title": "Rajasthan Checklist",
        "propertyTypes": [
          "Society Property",
          "JDA/Nagar Nigam/ UIT",
          "Gram Panchayat",
          "Converted/Khasra Properties",
          "Non Converted",
          "Plot",
          "U/C properties",
          "Commercial Purchase",
          "RHB",
          "RIICO",
          "Agricultural",
          "Builder Property",
          "Resale"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "Copy Title deed in favour of borrower (In LAP cases)",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": true,
              "Gram Panchayat": true,
              "Converted/Khasra Properties": true,
              "Non Converted": true,
              "Plot": true,
              "U/C properties": true,
              "Commercial Purchase": true,
              "RHB": true,
              "RIICO": true,
              "Agricultural": true,
              "Builder Property": true,
              "Resale": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_2",
            "name": "Sanction Building Plan required for more than 500 Sqmt plot (Age less than 07 Years for Residential and 10 years for Others)",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": true,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": true,
              "Non Converted": true,
              "Plot": false,
              "U/C properties": true,
              "Commercial Purchase": true,
              "RHB": false,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Not Applicable",
            "technicalStage": "If Applicable"
          },
          {
            "id": "doc_3",
            "name": "Electricity Bill",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": true,
              "Converted/Khasra Properties": true,
              "Non Converted": true,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Not Applicable",
            "technicalStage": "If Applicable"
          },
          {
            "id": "doc_4",
            "name": "Patta and Site Plan",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": true,
              "Gram Panchayat": true,
              "Converted/Khasra Properties": true,
              "Non Converted": false,
              "Plot": true,
              "U/C properties": true,
              "Commercial Purchase": true,
              "RHB": false,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Not Applicable",
            "technicalStage": "If Applicable"
          },
          {
            "id": "doc_5",
            "name": "Allotment Letter",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": true,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": true,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_6",
            "name": "Uitlity Bills (In the name of property owner)",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": true,
              "Gram Panchayat": true,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": true,
              "RIICO": true,
              "Agricultural": true,
              "Builder Property": true,
              "Resale": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_7",
            "name": "Possession Letter",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": true,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": true,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": true,
              "Resale": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_8",
            "name": "Registerd Lease Deed",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": true,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": true,
              "RIICO": true,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_9",
            "name": "Death certificate -for latest trnsactions",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": true,
              "Gram Panchayat": true,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": true,
              "RIICO": true,
              "Agricultural": true,
              "Builder Property": true,
              "Resale": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_10",
            "name": "Auction slae certifcate",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": true,
              "Gram Panchayat": true,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": true,
              "RIICO": true,
              "Agricultural": true,
              "Builder Property": true,
              "Resale": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_11",
            "name": "NOC (Non-transferable Patta)",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": true,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_12",
            "name": "Registered Mortgage Deed",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": true,
              "Gram Panchayat": true,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": true,
              "RIICO": true,
              "Agricultural": true,
              "Builder Property": true,
              "Resale": true
            },
            "legalStage": "Post Disbursement",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_13",
            "name": "Site Plan",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": true,
              "Gram Panchayat": true,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": true,
              "RIICO": true,
              "Agricultural": true,
              "Builder Property": true,
              "Resale": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_14",
            "name": "Reg Doc",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": true,
              "Gram Panchayat": true,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": true,
              "RIICO": true,
              "Agricultural": true,
              "Builder Property": true,
              "Resale": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_15",
            "name": "Payment Receipt",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": true,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_16",
            "name": "Registry / Sale Deed",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": true,
              "Gram Panchayat": true,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": true,
              "RIICO": true,
              "Agricultural": true,
              "Builder Property": true,
              "Resale": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_17",
            "name": "Copy of Minimum 13 years title chain documents",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": true,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": true,
              "RIICO": true,
              "Agricultural": false,
              "Builder Property": true,
              "Resale": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_18",
            "name": "Layout Plan",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": true,
              "Agricultural": true,
              "Builder Property": true,
              "Resale": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_19",
            "name": "Society Verification Letter",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Post Disbursement",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_20",
            "name": "Indemnity Bond",
            "checks": {
              "Society Property": true,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Post Disbursement",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_21",
            "name": "Certificate of Possession",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": true,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_22",
            "name": "No Dues / Regularization",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": true,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_23",
            "name": "Registered Conveyance Deed",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": true,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_24",
            "name": "Registered perpetual Lease Deed",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": true,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_25",
            "name": "Registered Patta",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": true,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_26",
            "name": "NOC/Missal report",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": true,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Post Disbursement",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_27",
            "name": "Registered Lease Agreement",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": true,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_28",
            "name": "NOC for Mortgage",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": true,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Post Disbursement",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_29",
            "name": "PTM",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": true,
              "Agricultural": false,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_30",
            "name": "13 Years revenue record Jambandi",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": false,
              "Agricultural": true,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_31",
            "name": "Jamabandi",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": false,
              "Agricultural": true,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_32",
            "name": "Khasra Map",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": false,
              "Agricultural": true,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Post Disbursement",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_33",
            "name": "Registerd Conversion (if applicable)",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": false,
              "Agricultural": true,
              "Builder Property": false,
              "Resale": false
            },
            "legalStage": "Post Disbursement",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_34",
            "name": "Building/Sanction Plan",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": true,
              "Resale": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_35",
            "name": "Agreement to Sale",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": true,
              "Resale": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_36",
            "name": "Builder NOC",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": true,
              "Resale": false
            },
            "legalStage": "Post Disbursement",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_37",
            "name": "RERA Certificate",
            "checks": {
              "Society Property": false,
              "JDA/Nagar Nigam/ UIT": false,
              "Gram Panchayat": false,
              "Converted/Khasra Properties": false,
              "Non Converted": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "RHB": false,
              "RIICO": false,
              "Agricultural": false,
              "Builder Property": true,
              "Resale": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          }
        ]
      }
    ],
    "Uttar Pradesh": [
      {
        "title": "UP Checklist",
        "propertyTypes": [
          "Approved/MC Limit",
          "Regularized",
          "Village abadi/ Urbanized",
          "Khasra properties",
          "Old city area",
          "MDUs / Developer Unit",
          "Plot",
          "U/C properties",
          "Commercial Purchase",
          "Freehold Property",
          "Leasehold Property",
          "Residential Property (LDA Flats/ Builder Floors Independent Houses)",
          "Industrial Property"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "Copy Title deed in favour of borrower (In LAP cases)",
            "checks": {
              "Approved/MC Limit": true,
              "Regularized": true,
              "Village abadi/ Urbanized": true,
              "Khasra properties": true,
              "Old city area": true,
              "MDUs / Developer Unit": true,
              "Plot": true,
              "U/C properties": true,
              "Commercial Purchase": true,
              "Freehold Property": true,
              "Leasehold Property": true,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_2",
            "name": "Sanction Building Plan (Age less than 07 Years for Residential and 10 years for Others)",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": false,
              "Leasehold Property": true,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Not Applicable",
            "technicalStage": "If Applicable"
          },
          {
            "id": "doc_3",
            "name": "Occupation Certificate / Completion Certificate (Age less than 05 Years in Independent house/ Floors and mandatory in projects)",
            "checks": {
              "Approved/MC Limit": true,
              "Regularized": true,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": "✓ (Post Completion)",
              "Commercial Purchase": false,
              "Freehold Property": false,
              "Leasehold Property": false,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": false,
              "Industrial Property": true
            },
            "legalStage": "Not Applicable",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_4",
            "name": "Property Tax Receipt / Electricity Bill",
            "checks": {
              "Approved/MC Limit": true,
              "Regularized": true,
              "Village abadi/ Urbanized": true,
              "Khasra properties": true,
              "Old city area": true,
              "MDUs / Developer Unit": true,
              "Plot": false,
              "U/C properties": "✓ Common Electricity Connection",
              "Commercial Purchase": true,
              "Freehold Property": true,
              "Leasehold Property": true,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_5",
            "name": "Lease deed in Lucknow/Greater Lucknow",
            "checks": {
              "Approved/MC Limit": true,
              "Regularized": false,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": true,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": false,
              "Leasehold Property": true,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": false,
              "Industrial Property": true
            },
            "legalStage": "Not Applicable",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_6",
            "name": "If Property is listed in MC Demolition - Regularization receipt must be taken",
            "checks": {
              "Approved/MC Limit": true,
              "Regularized": true,
              "Village abadi/ Urbanized": true,
              "Khasra properties": true,
              "Old city area": true,
              "MDUs / Developer Unit": true,
              "Plot": false,
              "U/C properties": true,
              "Commercial Purchase": true,
              "Freehold Property": true,
              "Leasehold Property": false,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": false,
              "Industrial Property": true
            },
            "legalStage": "Not Applicable",
            "technicalStage": "If Applicable"
          },
          {
            "id": "doc_7",
            "name": "Previous Chain of Title Documents (13 years)",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": true,
              "Leasehold Property": true,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_8",
            "name": "Identity Proof of Owner",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": true,
              "Leasehold Property": true,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_9",
            "name": "Mutation Letter",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": true,
              "Leasehold Property": false,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_10",
            "name": "Possession Letter",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": false,
              "Leasehold Property": false,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Not Applicable",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_11",
            "name": "Electricity & Water Bills",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": true,
              "Leasehold Property": true,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_12",
            "name": "Khasra and Khatauni Records (land revenue records)",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": true,
              "Leasehold Property": false,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_13",
            "name": "Mutation Certificate (MCD/LDA records)",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": false,
              "Leasehold Property": true,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_14",
            "name": "Perpetual Lease Deed / Lease Agreement",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": false,
              "Leasehold Property": true,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_15",
            "name": "Permission from Lessor LDA transfer",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": false,
              "Leasehold Property": true,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_16",
            "name": "Allotment Letter (for LDA/Builder projects)",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": false,
              "Leasehold Property": true,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_17",
            "name": "Possession Proof",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": true,
              "Freehold Property": false,
              "Leasehold Property": true,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": true,
              "Industrial Property": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_18",
            "name": "Land Use Certificate",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": false,
              "Leasehold Property": false,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_19",
            "name": "Share Certificate (for societies)",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": false,
              "Leasehold Property": false,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_20",
            "name": "No Objection Certificate (NOC) from Society",
            "checks": {
              "Approved/MC Limit": false,
              "Regularized": false,
              "Village abadi/ Urbanized": false,
              "Khasra properties": false,
              "Old city area": false,
              "MDUs / Developer Unit": false,
              "Plot": false,
              "U/C properties": false,
              "Commercial Purchase": false,
              "Freehold Property": false,
              "Leasehold Property": false,
              "Residential Property (LDA Flats/ Builder Floors Independent Houses)": false,
              "Industrial Property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          }
        ]
      }
    ],
    "AP & Telangana": [
      {
        "title": "AP & TS Checklist",
        "propertyTypes": [
          "Single Sale Deed Properties",
          "Gramkantham",
          "Municipal Properties",
          "Grampanchayat Properties",
          "Plot Loan",
          "GHMC/HMDA",
          "MC/CMC/TMC",
          "Conservation/ Green zone"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "Copy Title deed in favour of borrower (In LAP cases)",
            "checks": {
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": true,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "GHMC/HMDA": false,
              "MC/CMC/TMC": false,
              "Conservation/ Green zone": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_2",
            "name": "Copy of Minimum 13 years title chain documents",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": true,
              "Municipal Properties": true,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "GHMC/HMDA": false,
              "MC/CMC/TMC": false,
              "Conservation/ Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_3",
            "name": "13 Years Latest Property Taxes",
            "checks": {
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": false,
              "Grampanchayat Properties": false,
              "Plot Loan": false,
              "GHMC/HMDA": false,
              "MC/CMC/TMC": false,
              "Conservation/ Green zone": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_4",
            "name": "Possession Certificate, (Same to be waived for municipal limit property)",
            "checks": {
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": false,
              "Grampanchayat Properties": false,
              "Plot Loan": false,
              "GHMC/HMDA": false,
              "MC/CMC/TMC": false,
              "Conservation/ Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_5",
            "name": "FMC/Death Certficate - In case of Death of Property owner in present transaction",
            "checks": {
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": true,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "GHMC/HMDA": false,
              "MC/CMC/TMC": false,
              "Conservation/ Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_6",
            "name": "Auction sale certifcate",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "GHMC/HMDA": false,
              "MC/CMC/TMC": false,
              "Conservation/ Green zone": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_7",
            "name": "13 Years revenue record ( same to be waived for 13 yrs Tax paid)",
            "checks": {
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": false,
              "Grampanchayat Properties": false,
              "Plot Loan": false,
              "GHMC/HMDA": false,
              "MC/CMC/TMC": false,
              "Conservation/ Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_8",
            "name": "EC for 13 Years",
            "checks": {
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": true,
              "Grampanchayat Properties": true,
              "Plot Loan": false,
              "GHMC/HMDA": false,
              "MC/CMC/TMC": false,
              "Conservation/ Green zone": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_9",
            "name": "for agricultural property required NA order / Conversion order",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": true,
              "Plot Loan": false,
              "GHMC/HMDA": false,
              "MC/CMC/TMC": false,
              "Conservation/ Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_10",
            "name": "Latest Property Taxes",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "GHMC/HMDA": true,
              "MC/CMC/TMC": true,
              "Conservation/ Green zone": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_11",
            "name": "Reg Doc",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": false,
              "Plot Loan": true,
              "GHMC/HMDA": false,
              "MC/CMC/TMC": false,
              "Conservation/ Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_12",
            "name": "Occupancy Certificate (Mortgage Clause)- For Apartment Flats",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": false,
              "Plot Loan": true,
              "GHMC/HMDA": false,
              "MC/CMC/TMC": false,
              "Conservation/ Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_13",
            "name": "Sale deed in the name of customer",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "GHMC/HMDA": true,
              "MC/CMC/TMC": true,
              "Conservation/ Green zone": true
            },
            "legalStage": "Not Applicable",
            "technicalStage": "Login"
          },
          {
            "id": "doc_14",
            "name": "Building plan/ Layout plan/ Floor plan",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "GHMC/HMDA": true,
              "MC/CMC/TMC": true,
              "Conservation/ Green zone": true
            },
            "legalStage": "Not Applicable",
            "technicalStage": "Login"
          },
          {
            "id": "doc_15",
            "name": "LRS / LUC",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "GHMC/HMDA": true,
              "MC/CMC/TMC": true,
              "Conservation/ Green zone": false
            },
            "legalStage": "Not Applicable",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_16",
            "name": "VRO / MRO / Authorized surveyor sketch",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "GHMC/HMDA": true,
              "MC/CMC/TMC": true,
              "Conservation/ Green zone": true
            },
            "legalStage": "Not Applicable",
            "technicalStage": "Initiation"
          }
        ]
      }
    ],
    "Karnataka": [
      {
        "title": "Karnataka Checklist",
        "propertyTypes": [
          "Single Sale Deed Properties",
          "Municipal Properties/BBMP/BDA",
          "Grampanchayat Properties",
          "Plot Loan",
          "MC/CMC/TMC",
          "Green zone"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "Copy Title deed in favour of borrower (In LAP cases)",
            "checks": {
              "Single Sale Deed Properties": true,
              "Municipal Properties/BBMP/BDA": true,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_2",
            "name": "Allottement Letter",
            "checks": {
              "Single Sale Deed Properties": false,
              "Municipal Properties/BBMP/BDA": true,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_3",
            "name": "Agreement of sale",
            "checks": {
              "Single Sale Deed Properties": false,
              "Municipal Properties/BBMP/BDA": true,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "MC/CMC/TMC": true,
              "Green zone": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_4",
            "name": "Copy of Minimum 13 years title chain documents",
            "checks": {
              "Single Sale Deed Properties": false,
              "Municipal Properties/BBMP/BDA": true,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_5",
            "name": "13 Years Latest Property Taxes",
            "checks": {
              "Single Sale Deed Properties": true,
              "Municipal Properties/BBMP/BDA": false,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "MC/CMC/TMC": true,
              "Green zone": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_6",
            "name": "Uitlity Bills (For resale purchase bill to be name of seller name)",
            "checks": {
              "Single Sale Deed Properties": true,
              "Municipal Properties/BBMP/BDA": false,
              "Grampanchayat Properties": true,
              "Plot Loan": false,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_7",
            "name": "Possession Certificate, (Same to be waived for municipal limit property)",
            "checks": {
              "Single Sale Deed Properties": true,
              "Municipal Properties/BBMP/BDA": false,
              "Grampanchayat Properties": false,
              "Plot Loan": false,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_8",
            "name": "13 Years revenue record ( same to be waived for 13 yrs Tax paid)",
            "checks": {
              "Single Sale Deed Properties": true,
              "Municipal Properties/BBMP/BDA": false,
              "Grampanchayat Properties": true,
              "Plot Loan": false,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_9",
            "name": "EC for 13 Years",
            "checks": {
              "Single Sale Deed Properties": true,
              "Municipal Properties/BBMP/BDA": true,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_10",
            "name": "A -Katha, B- Katha & Form.no.9 & 11 A",
            "checks": {
              "Single Sale Deed Properties": true,
              "Municipal Properties/BBMP/BDA": true,
              "Grampanchayat Properties": true,
              "Plot Loan": false,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_11",
            "name": "digital A- Katha & B- Katha",
            "checks": {
              "Single Sale Deed Properties": true,
              "Municipal Properties/BBMP/BDA": true,
              "Grampanchayat Properties": true,
              "Plot Loan": false,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_12",
            "name": "FMC - for latest trnsactions",
            "checks": {
              "Single Sale Deed Properties": true,
              "Municipal Properties/BBMP/BDA": true,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_13",
            "name": "Death certificate -for latest trnsactions",
            "checks": {
              "Single Sale Deed Properties": true,
              "Municipal Properties/BBMP/BDA": true,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_14",
            "name": "Auction slae certifcate",
            "checks": {
              "Single Sale Deed Properties": false,
              "Municipal Properties/BBMP/BDA": false,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_15",
            "name": "Building/Sanction Plan",
            "checks": {
              "Single Sale Deed Properties": false,
              "Municipal Properties/BBMP/BDA": true,
              "Grampanchayat Properties": true,
              "Plot Loan": false,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_16",
            "name": "NA order / Conversion order",
            "checks": {
              "Single Sale Deed Properties": false,
              "Municipal Properties/BBMP/BDA": true,
              "Grampanchayat Properties": false,
              "Plot Loan": false,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_17",
            "name": "Latest Property Taxes",
            "checks": {
              "Single Sale Deed Properties": false,
              "Municipal Properties/BBMP/BDA": true,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_18",
            "name": "Reg Doc",
            "checks": {
              "Single Sale Deed Properties": false,
              "Municipal Properties/BBMP/BDA": true,
              "Grampanchayat Properties": false,
              "Plot Loan": true,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_19",
            "name": "Occupancy Certificate (Mortgage Clause)- For Apartment Flats",
            "checks": {
              "Single Sale Deed Properties": false,
              "Municipal Properties/BBMP/BDA": true,
              "Grampanchayat Properties": false,
              "Plot Loan": true,
              "MC/CMC/TMC": false,
              "Green zone": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_20",
            "name": "Khata certificate and extract (Digital khata only)",
            "checks": {
              "Single Sale Deed Properties": false,
              "Municipal Properties/BBMP/BDA": false,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "MC/CMC/TMC": true,
              "Green zone": true
            },
            "legalStage": "Not Applicable",
            "technicalStage": "Login"
          },
          {
            "id": "doc_21",
            "name": "Building plan/ Layout plan/ Floor plan",
            "checks": {
              "Single Sale Deed Properties": false,
              "Municipal Properties/BBMP/BDA": false,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "MC/CMC/TMC": true,
              "Green zone": true
            },
            "legalStage": "Not Applicable",
            "technicalStage": "Login"
          },
          {
            "id": "doc_22",
            "name": "Land conversion order / NA order",
            "checks": {
              "Single Sale Deed Properties": false,
              "Municipal Properties/BBMP/BDA": false,
              "Grampanchayat Properties": true,
              "Plot Loan": true,
              "MC/CMC/TMC": true,
              "Green zone": true
            },
            "legalStage": "Not Applicable",
            "technicalStage": "Initiation"
          }
        ]
      }
    ],
    "Tamil Nadu": [
      {
        "title": "Tamil Nadu Checklist",
        "propertyTypes": [
          "Standalone structure",
          "Apartments/Retail office spaces",
          "Under construction Buildings",
          "Plot Loan",
          "Commercial/ industrial purchase",
          "Single Sale Deed Properties",
          "Gramkantham",
          "Municipal Properties",
          "Grampanchayat Properties"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "Title deed",
            "checks": {
              "Standalone structure": true,
              "Apartments/Retail office spaces": true,
              "Under construction Buildings": true,
              "Plot Loan": true,
              "Commercial/ industrial purchase": true,
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": true,
              "Grampanchayat Properties": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_2",
            "name": "Construction agreement",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": true,
              "Under construction Buildings": false,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": false
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_3",
            "name": "Agreement of sale- Purchase transaction",
            "checks": {
              "Standalone structure": true,
              "Apartments/Retail office spaces": true,
              "Under construction Buildings": true,
              "Plot Loan": true,
              "Commercial/ industrial purchase": true,
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": false
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_4",
            "name": "Revenue records (Patta/TSLR with FMB)",
            "checks": {
              "Standalone structure": true,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": true,
              "Plot Loan": true,
              "Commercial/ industrial purchase": true,
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": false
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_5",
            "name": "Approved building plan",
            "checks": {
              "Standalone structure": true,
              "Apartments/Retail office spaces": true,
              "Under construction Buildings": true,
              "Plot Loan": true,
              "Commercial/ industrial purchase": true,
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": false
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_6",
            "name": "Approved layout plan/regularisation certificate",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": false,
              "Plot Loan": true,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": false
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_7",
            "name": "Statutory Bills (Property tax, EB Bill)",
            "checks": {
              "Standalone structure": true,
              "Apartments/Retail office spaces": true,
              "Under construction Buildings": true,
              "Plot Loan": true,
              "Commercial/ industrial purchase": true,
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": false
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_8",
            "name": "Conversion order from distrcit collector Nanjai Properties(Wet land)",
            "checks": {
              "Standalone structure": true,
              "Apartments/Retail office spaces": true,
              "Under construction Buildings": true,
              "Plot Loan": true,
              "Commercial/ industrial purchase": true,
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": false
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_9",
            "name": "Allotment letter (TNHB/Slum clearance Board)",
            "checks": {
              "Standalone structure": true,
              "Apartments/Retail office spaces": true,
              "Under construction Buildings": true,
              "Plot Loan": true,
              "Commercial/ industrial purchase": true,
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_10",
            "name": "Architect certificate",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": true,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": false
            },
            "legalStage": "Not Applicable",
            "technicalStage": "Login"
          },
          {
            "id": "doc_11",
            "name": "Copy of Minimum 13 years title chain documents",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": false,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": false,
              "Gramkantham": true,
              "Municipal Properties": true,
              "Grampanchayat Properties": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_12",
            "name": "13 Years Latest Property Taxes",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": false,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": false,
              "Grampanchayat Properties": false
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_13",
            "name": "Uitlity Bills (For resale purchase bill to be name of seller name)",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": false,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": false,
              "Grampanchayat Properties": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_14",
            "name": "Possession Certificate, (Same to be waived for municipal limit property)",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": false,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": false,
              "Grampanchayat Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_15",
            "name": "FMC - for latest transactions",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": false,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": true,
              "Grampanchayat Properties": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_16",
            "name": "Death certificate -for latest transactions",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": false,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": true,
              "Grampanchayat Properties": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_17",
            "name": "Auction slae certifcate",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": false,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_18",
            "name": "13 Years revenue record ( same to be waived for 13 yrs Tax paid)",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": false,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": false,
              "Grampanchayat Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_19",
            "name": "EC for 13 Years",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": false,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": true,
              "Grampanchayat Properties": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_20",
            "name": "Building/Sanction Plan",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": false,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": true,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_21",
            "name": "Layout Plan",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": false,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_22",
            "name": "for agricultural property required NA order / Conversion order",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": false,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_23",
            "name": "Latest Property Taxes",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": false,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_24",
            "name": "Reg Doc",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": false,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_25",
            "name": "Occupancy Certificate (Mortgage Clause)- For Apartment Flats",
            "checks": {
              "Standalone structure": false,
              "Apartments/Retail office spaces": false,
              "Under construction Buildings": false,
              "Plot Loan": false,
              "Commercial/ industrial purchase": false,
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          }
        ]
      }
    ]
  },
  "Secured Direct": {
    "AP & Telangana": [
      {
        "title": "Standard Checklist",
        "propertyTypes": [
          "Single Sale Deed Properties",
          "Gramkantham",
          "Municipal Properties",
          "Grampanchayat Properties",
          "Plot Loan"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "Copy Title deed in favour of borrower (In LAP cases)",
            "checks": {
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": true,
              "Grampanchayat Properties": true,
              "Plot Loan": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_2",
            "name": "Copy of Minimum 13 years title chain documents",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": true,
              "Municipal Properties": true,
              "Grampanchayat Properties": true,
              "Plot Loan": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_3",
            "name": "13 Years Latest Property Taxes",
            "checks": {
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": false,
              "Grampanchayat Properties": false,
              "Plot Loan": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_4",
            "name": "Uitlity Bills (For resale purchase bill to be name of seller name)",
            "checks": {
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": false,
              "Grampanchayat Properties": true,
              "Plot Loan": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_5",
            "name": "Possession Certificate, (Same to be waived for municipal limit property)",
            "checks": {
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": false,
              "Grampanchayat Properties": false,
              "Plot Loan": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_6",
            "name": "LTP Surveyor Sketch (For Sy No Mismatch)",
            "checks": {
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": false,
              "Grampanchayat Properties": false,
              "Plot Loan": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_7",
            "name": "Collateral Pic with applicant & EC bill",
            "checks": {
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": false,
              "Grampanchayat Properties": false,
              "Plot Loan": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_8",
            "name": "Ownership Certificate from GP/ULB or Assessment Registration certificate",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": true,
              "Municipal Properties": false,
              "Grampanchayat Properties": false,
              "Plot Loan": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_9",
            "name": "Collateral Boundary Map & Route Map certificate (Waived if mentioned in sale deed and No Idetification Issue)",
            "checks": {
              "Single Sale Deed Properties": true,
              "Gramkantham": true,
              "Municipal Properties": false,
              "Grampanchayat Properties": false,
              "Plot Loan": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_10",
            "name": "13 Years revenue record ( same to be waived for 13 yrs Tax paid)",
            "checks": {
              "Single Sale Deed Properties": true,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": false,
              "Plot Loan": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_11",
            "name": "Assessment/Mutation Certificate wherever applicable",
            "checks": {
              "Single Sale Deed Properties": true,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": true,
              "Plot Loan": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_12",
            "name": "EC for 13 Years",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": true,
              "Municipal Properties": false,
              "Grampanchayat Properties": false,
              "Plot Loan": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_13",
            "name": "Letter from Tahsildar/Mandal revenue stating that the present land is Gramakantham land of that village and not a government land.",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": true,
              "Municipal Properties": false,
              "Grampanchayat Properties": false,
              "Plot Loan": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_14",
            "name": "Building/Sanction Plan",
            "checks": {
              "Single Sale Deed Properties": true,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": false,
              "Plot Loan": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_15",
            "name": "LRS",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": false,
              "Plot Loan": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_16",
            "name": "LUC",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": false,
              "Plot Loan": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_17",
            "name": "Layout Plan",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": false,
              "Plot Loan": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_18",
            "name": "Surveyor Sketch",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": false,
              "Grampanchayat Properties": false,
              "Plot Loan": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_19",
            "name": "NA order / Conversion order",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": false,
              "Plot Loan": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_20",
            "name": "BRS or BPS (Considering deviated areas)",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": false,
              "Plot Loan": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_21",
            "name": "Municipal Assessment certificate",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": false,
              "Plot Loan": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_22",
            "name": "Latest Property Taxes",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": true,
              "Plot Loan": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_23",
            "name": "Sub-division Certificate (Sub-divided plot)",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": false,
              "Plot Loan": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_24",
            "name": "Reg Doc",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": false,
              "Plot Loan": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_25",
            "name": "Occupancy Certificate (Mortgage Clause)- For Apartment Flats",
            "checks": {
              "Single Sale Deed Properties": false,
              "Gramkantham": false,
              "Municipal Properties": true,
              "Grampanchayat Properties": false,
              "Plot Loan": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          }
        ]
      },
      {
        "title": "Collateral Documents",
        "propertyTypes": [
          "Will Document",
          "Auction Property",
          "Partition Deed",
          "Gift Deed Properties"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "Copy registered will/ gift deed/Partition deed",
            "checks": {
              "Will Document": true,
              "Auction Property": false,
              "Partition Deed": true,
              "Gift Deed Properties": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_2",
            "name": "Copy Title deed in favour of borrower (In LAP cases)",
            "checks": {
              "Will Document": false,
              "Auction Property": false,
              "Partition Deed": true,
              "Gift Deed Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_3",
            "name": "Copy of registered chain documents",
            "checks": {
              "Will Document": true,
              "Auction Property": false,
              "Partition Deed": true,
              "Gift Deed Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_4",
            "name": "Copy of auction sale certificate",
            "checks": {
              "Will Document": false,
              "Auction Property": true,
              "Partition Deed": false,
              "Gift Deed Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_5",
            "name": "Death Certificate",
            "checks": {
              "Will Document": true,
              "Auction Property": false,
              "Partition Deed": false,
              "Gift Deed Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_6",
            "name": "Family Tree",
            "checks": {
              "Will Document": true,
              "Auction Property": false,
              "Partition Deed": true,
              "Gift Deed Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_7",
            "name": "EC",
            "checks": {
              "Will Document": true,
              "Auction Property": true,
              "Partition Deed": true,
              "Gift Deed Properties": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_8",
            "name": "Tax Paid",
            "checks": {
              "Will Document": true,
              "Auction Property": true,
              "Partition Deed": true,
              "Gift Deed Properties": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_9",
            "name": "Simple Mortgage Deed",
            "checks": {
              "Will Document": true,
              "Auction Property": false,
              "Partition Deed": false,
              "Gift Deed Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_10",
            "name": "Mutation Entries in the name of donee",
            "checks": {
              "Will Document": false,
              "Auction Property": false,
              "Partition Deed": false,
              "Gift Deed Properties": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          }
        ]
      }
    ],
    "Maharashtra": [
      {
        "title": "Standard Collaterals",
        "propertyTypes": [
          "Builder Purchase",
          "Resale Purchase/LAP",
          "MHADA/PMRDA",
          "MIDC",
          "CIDCO",
          "SRA"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "Copy registered ATS/Sale deed/Draft",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": true,
              "MIDC": true,
              "CIDCO": true,
              "SRA": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_2",
            "name": "Copy of Minimum 13 years title chain documents",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": true,
              "MIDC": true,
              "CIDCO": true,
              "SRA": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_3",
            "name": "Agreement to Lease and Lease Deed of the mortgagor along with RR and Index II",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": true,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_4",
            "name": "Sale deed and Transfer Letter in case of Resale/transfer of ownership",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": true,
              "MIDC": false,
              "CIDCO": true,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_5",
            "name": "Allotment / Deed of assignment in f/o borrower",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": true,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_6",
            "name": "Lease Agreement copy (if common allotment then reg.copy)",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": true,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_7",
            "name": "Lease deed in f/o lessee/Society/owner by MIDC",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": true,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_8",
            "name": "Development Agreement and Power of Attorney (Wherever Applicable)",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_9",
            "name": "Org. Tripartite Agreement between owner, MIDC & Bank/NBFC (if applicable)",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": true,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_10",
            "name": "Tripartite Agreement between CIDCO, the original Project Affected Person (PAP) or allottee, and a third-party builder or purchaser.",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": true,
              "SRA": false
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_11",
            "name": "Provisional and Final Allotment Letter by Govt Auhtority (LAP)",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": true,
              "MIDC": false,
              "CIDCO": false,
              "SRA": true
            },
            "legalStage": "Login",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_12",
            "name": "Provisional and Final Allotment Letter by Govt Auhtority (HL)",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": true,
              "MIDC": false,
              "CIDCO": false,
              "SRA": true
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_13",
            "name": "Allotment letter from Builder",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_14",
            "name": "LAP- Alternative accommodation agreement (In SRA Redevelopment) (If applicable)",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_15",
            "name": "HL- Alternative accommodation agreement (In SRA Redevelopment) (If applicable)",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_16",
            "name": "Builder or Society NOC.",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_17",
            "name": "Mortgage NOC from Society (If society formed)",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": false,
              "MIDC": true,
              "CIDCO": true,
              "SRA": true
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_18",
            "name": "MHADA NOC / Society NOC whichever is applicable",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": true,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_19",
            "name": "Mortgage NOC from Govt. Authority",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": true,
              "CIDCO": true,
              "SRA": true
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_20",
            "name": "NA Order",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_21",
            "name": "7/12, in the name of Land Owner / Developer / Society.",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_22",
            "name": "RERA Registration wherever applicable",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_23",
            "name": "Society registration certificate, if Share certificate not issued",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": true,
              "MIDC": true,
              "CIDCO": true,
              "SRA": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_24",
            "name": "Share Certificate if issued",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": true,
              "MIDC": true,
              "CIDCO": true,
              "SRA": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_25",
            "name": "Commencement Certificate and Completion Certificate",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": true,
              "MIDC": true,
              "CIDCO": true,
              "SRA": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_26",
            "name": "Own Contribution payment receipts",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": false,
              "CIDCO": false,
              "SRA": false
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_27",
            "name": "Construction Plan & permission copy from concern Authority",
            "checks": {
              "Builder Purchase": true,
              "Resale Purchase/LAP": true,
              "MHADA/PMRDA": true,
              "MIDC": true,
              "CIDCO": true,
              "SRA": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_28",
            "name": "Transfer Letter & Fees Paid- LAP",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": true,
              "CIDCO": false,
              "SRA": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_29",
            "name": "Transfer Letter & Fees Paid- HL",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": true,
              "CIDCO": false,
              "SRA": true
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_30",
            "name": "Occupation certificate copy- LAP",
            "checks": {
              "Builder Purchase": false,
              "Resale Purchase/LAP": false,
              "MHADA/PMRDA": false,
              "MIDC": true,
              "CIDCO": false,
              "SRA": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          }
        ]
      },
      {
        "title": "Specialised Collaterals",
        "propertyTypes": [
          "Gaothan",
          "Gunthewari",
          "Grampanchayat Property",
          "R-Zone Properties",
          "Plot"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "Copy Title deed in favour of borrower (In LAP cases)",
            "checks": {
              "Gaothan": true,
              "Gunthewari": true,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": true
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_2",
            "name": "Copy of Minimum 13 years title chain documents",
            "checks": {
              "Gaothan": true,
              "Gunthewari": true,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": true
            },
            "legalStage": "Login",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_3",
            "name": "Copy Gaothan certificate/Dakhla (If Available)*",
            "checks": {
              "Gaothan": true,
              "Gunthewari": false,
              "Grampanchayat Property": false,
              "R-Zone Properties": false,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_4",
            "name": "Copy Gunthewari Certificates issued up to 2008. (2009 to 2015: - Will be decisioned case to case basis)",
            "checks": {
              "Gaothan": false,
              "Gunthewari": true,
              "Grampanchayat Property": false,
              "R-Zone Properties": false,
              "Plot": false
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_5",
            "name": "R Zone Certificate",
            "checks": {
              "Gaothan": false,
              "Gunthewari": true,
              "Grampanchayat Property": false,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_6",
            "name": "13 years assessment / Namuna 8",
            "checks": {
              "Gaothan": true,
              "Gunthewari": false,
              "Grampanchayat Property": false,
              "R-Zone Properties": false,
              "Plot": false
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_7",
            "name": "Four Boundaries/Chatursimha Certificate issued by Grampanchayat (if applicable only for Chatursimha)",
            "checks": {
              "Gaothan": true,
              "Gunthewari": false,
              "Grampanchayat Property": true,
              "R-Zone Properties": false,
              "Plot": false
            },
            "legalStage": "Login",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_8",
            "name": "Four boundaries of collateral should be mentioned in sale deed/architect plan.",
            "checks": {
              "Gaothan": false,
              "Gunthewari": false,
              "Grampanchayat Property": false,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_9",
            "name": "7/12 extract or Property card wherever applicable",
            "checks": {
              "Gaothan": false,
              "Gunthewari": true,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_10",
            "name": "Mutation (Ferfar) letter passed by GP resolution/Municaipl corporation (wherever applicable)",
            "checks": {
              "Gaothan": true,
              "Gunthewari": true,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_11",
            "name": "N.A. Order/Permission or One time premium paid receipt as per new Maharashtra Amendment Act",
            "checks": {
              "Gaothan": false,
              "Gunthewari": false,
              "Grampanchayat Property": true,
              "R-Zone Properties": false,
              "Plot": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_12",
            "name": "Latest Utility Bills (electricity/water/gas connection) for proof of address on the name of borrower/previous sellers name",
            "checks": {
              "Gaothan": true,
              "Gunthewari": true,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_13",
            "name": "Latest Property tax receipt with No dues",
            "checks": {
              "Gaothan": true,
              "Gunthewari": true,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_14",
            "name": "Approved plan and C.C. copy from GP/competent authority or Architect plan (If applicable)",
            "checks": {
              "Gaothan": true,
              "Gunthewari": true,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_15",
            "name": "Flat- Occupation/Completion certificate copy (if applicable)",
            "checks": {
              "Gaothan": false,
              "Gunthewari": false,
              "Grampanchayat Property": true,
              "R-Zone Properties": false,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_16",
            "name": "Land title search report copy. (Applicable in Builder/Resale Flat Purchase case)",
            "checks": {
              "Gaothan": false,
              "Gunthewari": false,
              "Grampanchayat Property": true,
              "R-Zone Properties": false,
              "Plot": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_17",
            "name": "No Litigation and encumbrance affidavit signed by all borrowers.",
            "checks": {
              "Gaothan": false,
              "Gunthewari": false,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Post Disbursement",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_18",
            "name": "Registered Mortgage to be executed.",
            "checks": {
              "Gaothan": true,
              "Gunthewari": true,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Post Disbursement",
            "technicalStage": "Not Applicable"
          },
          {
            "id": "doc_19",
            "name": "Lien mark/mortgage intimation.",
            "checks": {
              "Gaothan": true,
              "Gunthewari": false,
              "Grampanchayat Property": true,
              "R-Zone Properties": true,
              "Plot": false
            },
            "legalStage": "Post Disbursement",
            "technicalStage": "Not Applicable"
          }
        ]
      },
      {
        "title": "Collateral Documents",
        "propertyTypes": [
          "Will Document",
          "Auction Property",
          "Partition Deed",
          "Gift Deed Properties"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "Copy registered will/ gift deed/Partition deed",
            "checks": {
              "Will Document": true,
              "Auction Property": false,
              "Partition Deed": true,
              "Gift Deed Properties": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_2",
            "name": "Copy Title deed in favour of borrower (In LAP cases)",
            "checks": {
              "Will Document": false,
              "Auction Property": false,
              "Partition Deed": true,
              "Gift Deed Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_3",
            "name": "Copy of registered chain documents",
            "checks": {
              "Will Document": true,
              "Auction Property": false,
              "Partition Deed": true,
              "Gift Deed Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_4",
            "name": "Copy of auction sale certificate",
            "checks": {
              "Will Document": false,
              "Auction Property": true,
              "Partition Deed": false,
              "Gift Deed Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_5",
            "name": "Death Certificate",
            "checks": {
              "Will Document": true,
              "Auction Property": false,
              "Partition Deed": false,
              "Gift Deed Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_6",
            "name": "Family Tree",
            "checks": {
              "Will Document": true,
              "Auction Property": false,
              "Partition Deed": true,
              "Gift Deed Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_7",
            "name": "Tax Bill or Receipt Paid",
            "checks": {
              "Will Document": true,
              "Auction Property": true,
              "Partition Deed": true,
              "Gift Deed Properties": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_8",
            "name": "Mutation Entries in the name of donee",
            "checks": {
              "Will Document": false,
              "Auction Property": false,
              "Partition Deed": false,
              "Gift Deed Properties": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          }
        ]
      }
    ],
    "Madhya Pradesh": [
      {
        "title": "Standard Checklist",
        "propertyTypes": [
          "Nagar Palika/Parishad Ledger",
          "Notarized Sale deed properties",
          "Patta Properties Pradesh",
          "Lease Hold Properties",
          "Colony",
          "Flats/Apartments in Multistorey buildings",
          "Private Khasra property"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "13 years of tax Ledger (Previous owners tax ledger is required)",
            "checks": {
              "Nagar Palika/Parishad Ledger": true,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_2",
            "name": "Copy of Registered Deed- Co-ownership/Gift Deed or old sale deed",
            "checks": {
              "Nagar Palika/Parishad Ledger": true,
              "Notarized Sale deed properties": true,
              "Patta Properties Pradesh": true,
              "Lease Hold Properties": false,
              "Colony": true,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_3",
            "name": "NOC of Nagar Palika / Nagar Parishad to be collect",
            "checks": {
              "Nagar Palika/Parishad Ledger": true,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Cheque Handover",
            "technicalStage": "Cheque Handover"
          },
          {
            "id": "doc_4",
            "name": "Latest Electricity bills on the name of borrower",
            "checks": {
              "Nagar Palika/Parishad Ledger": true,
              "Notarized Sale deed properties": true,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_5",
            "name": "Copy of Registered Mortgage in co-ownership deed. EM in Sale/Gift Deed",
            "checks": {
              "Nagar Palika/Parishad Ledger": true,
              "Notarized Sale deed properties": true,
              "Patta Properties Pradesh": true,
              "Lease Hold Properties": true,
              "Colony": true,
              "Flats/Apartments in Multistorey buildings": true,
              "Private Khasra property": true
            },
            "legalStage": "Legal Vetting",
            "technicalStage": "Legal Vetting"
          },
          {
            "id": "doc_6",
            "name": "Notarized sale agreement(5 years old)",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": true,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_7",
            "name": "Drone Khasra & Tahsil Patta",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": true,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Login",
            "technicalStage": "Login"
          },
          {
            "id": "doc_8",
            "name": "Latest Property tax bill with paid receipt at submitted before cheque handover",
            "checks": {
              "Nagar Palika/Parishad Ledger": true,
              "Notarized Sale deed properties": true,
              "Patta Properties Pradesh": true,
              "Lease Hold Properties": true,
              "Colony": true,
              "Flats/Apartments in Multistorey buildings": true,
              "Private Khasra property": false
            },
            "legalStage": "Cheque Handover",
            "technicalStage": "Login"
          },
          {
            "id": "doc_9",
            "name": "NOC of Gram Panchayat to be collect",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": true,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Cheque Handover",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_10",
            "name": "Lease Deed",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": true,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_11",
            "name": "NOC issued by MPHB/IDA/UDA",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": true,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Cheque Handover",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_12",
            "name": "Mutation certificate",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": true,
              "Colony": true,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": true
            },
            "legalStage": "Cheque Handover",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_13",
            "name": "TNCP & RERA certificate",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": true,
              "Flats/Apartments in Multistorey buildings": true,
              "Private Khasra property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_14",
            "name": "Khasra Records",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": true,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_15",
            "name": "Declaration Deed / Prakosht",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": true,
              "Private Khasra property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_16",
            "name": "Diversion order / Avashiya khasra / Applied receipt",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_17",
            "name": "Patwari trace map/private layout plan",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Login"
          },
          {
            "id": "doc_18",
            "name": "Latest Notarized sale agreement",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": true,
              "Patta Properties Pradesh": false,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_19",
            "name": "Nazariya Naksha to be documented",
            "checks": {
              "Nagar Palika/Parishad Ledger": false,
              "Notarized Sale deed properties": false,
              "Patta Properties Pradesh": true,
              "Lease Hold Properties": false,
              "Colony": false,
              "Flats/Apartments in Multistorey buildings": false,
              "Private Khasra property": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          }
        ]
      },
      {
        "title": "Collateral Documents",
        "propertyTypes": [
          "Will Document",
          "Auction Property",
          "Partition Deed",
          "Gift Deed Properties"
        ],
        "documents": [
          {
            "id": "doc_1",
            "name": "Copy registered will/ gift deed/Partition deed",
            "checks": {
              "Will Document": true,
              "Auction Property": false,
              "Partition Deed": true,
              "Gift Deed Properties": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_2",
            "name": "Copy Title deed in favour of borrower (In LAP cases)",
            "checks": {
              "Will Document": false,
              "Auction Property": false,
              "Partition Deed": true,
              "Gift Deed Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_3",
            "name": "Copy of registered chain documents",
            "checks": {
              "Will Document": true,
              "Auction Property": false,
              "Partition Deed": true,
              "Gift Deed Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_4",
            "name": "Copy of auction sale certificate",
            "checks": {
              "Will Document": false,
              "Auction Property": true,
              "Partition Deed": false,
              "Gift Deed Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_5",
            "name": "Death Certificate",
            "checks": {
              "Will Document": true,
              "Auction Property": false,
              "Partition Deed": false,
              "Gift Deed Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_6",
            "name": "Family Tree",
            "checks": {
              "Will Document": true,
              "Auction Property": false,
              "Partition Deed": true,
              "Gift Deed Properties": false
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_7",
            "name": "Tax Bill or Receipt Paid",
            "checks": {
              "Will Document": true,
              "Auction Property": true,
              "Partition Deed": true,
              "Gift Deed Properties": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          },
          {
            "id": "doc_8",
            "name": "Mutation Entries in the name of donee",
            "checks": {
              "Will Document": false,
              "Auction Property": false,
              "Partition Deed": false,
              "Gift Deed Properties": true
            },
            "legalStage": "Initiation",
            "technicalStage": "Initiation"
          }
        ]
      }
    ]
  }
};
