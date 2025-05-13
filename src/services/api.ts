import { SearchResultItem } from "@/components/SearchResults";
import { DateRange } from "react-day-picker";
import { performKeywordSearch } from "./searchUtils";
import CHBSL3716644 from "../../public/pdf/CHBSL3716644.pdf";
import DOC_MV23FW007656RRO_1_I8232012170 from "../../public/pdf/DOC_MV23FW007656RRO_1_I8232012170.pdf";
import DOC_MV23FW008231RRO_1_I8232012171 from "../../public/pdf/DOC_MV23FW008231RRO_1_I8232012171.pdf";
import Invoice_INV178629_1697739314386 from "../../public/pdf/Invoice_INV178629_1697739314386.pdf";
import Invoice_INV178631_1697739461140 from "../../public/pdf/Invoice_INV178631_1697739461140.pdf";
import Trafigura_VR_VR22289 from "../../public/pdf/Trafigura VR#22289 10-20-23.pdf";
import Trafigura_VR_VR22260 from "../../public/pdf/Trafigura VR#VR22260 10-20-23.pdf";
import oil_contract from "../../public/pdf/oil_contract.pdf";

// Create a mapping of file names to their imported references
const pdfMap: Record<string, string> = {
  "CHBSL3716644.pdf": "/pdf/CHBSL3716644.pdf",
  "DOC_MV23FW007656RRO_1_I8232012170.pdf":
    "/pdf/DOC_MV23FW007656RRO_1_I8232012170.pdf",
  "DOC_MV23FW008231RRO_1_I8232012171.pdf":
    "/pdf/DOC_MV23FW008231RRO_1_I8232012171.pdf",
  "Invoice_INV178629_1697739314386.pdf":
    "/pdf/Invoice_INV178629_1697739314386.pdf",
  "Invoice_INV178631_1697739461140.pdf":
    "/pdf/Invoice_INV178631_1697739461140.pdf",
  "Trafigura VR#22289 10-20-23.pdf": "/pdf/Trafigura VR#22289 10-20-23.pdf",
  "Trafigura VR#VR22260 10-20-23.pdf": "/pdf/Trafigura VR#VR22260 10-20-23.pdf",
  "oil_contract.pdf": "/pdf/oil_contract.pdf",
};

export const getPdfUrlByFilename = (filename: string): string => {
  if (pdfMap[filename]) {
    return pdfMap[filename];
  }

  const keys = Object.keys(pdfMap);
  const matchingKey = keys.find(
    (key) => key.includes(filename) || filename.includes(key)
  );

  if (matchingKey) {
    return pdfMap[matchingKey];
  }

  throw new Error(`PDF file "${filename}" not found`);
};

const mockResults = [
  {
    query: "contracts between traf and msc",
    answer: [
      {
        id: "doc-001",
        title: "Invoice - CHBSL3716644",
        pdf_file: "CHBSL3716644.pdf",
        date: "2023-10-03",
        size: "3.1MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "trafigura", "singapore", "msc"],
        content: [
          {
            Document_Summary: "Invoice between Traf and MSC",
            Content:
              "038227\n1000340965\nTrafigura PTE LTD\nOcean Financial Centre...",
            Date_Information: {
              Created: "2023-10-03",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Legal",
              Size: "3.1MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$100M",
          Ownership_structure: "60% / 40%",
        },
      },
      {
        id: "doc-002",
        title: "Invoice - DOC_MV23FW007656RRO_1_I8232012170",
        pdf_file: "DOC_MV23FW007656RRO_1_I8232012170.pdf",
        date: "2023-10-23",
        size: "2.5MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "msc", "october", "due november"],
        content: [
          {
            Document_Summary: "Invoice issued on 23/10/2023",
            Content:
              "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012170...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Finance",
              Size: "2.5MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$50M",
          Ownership_structure: "70% / 30%",
        },
      },
      {
        id: "doc-003",
        title: "Draft Crude Oil Contract",
        pdf_file: "oil_contract.pdf",
        date: "2023-09-10",
        size: "4.0MB",
        author: "ONGC",
        tags: ["oil", "contract", "trafigura", "draft"],
        content: [
          {
            Document_Summary: "Draft oil sale agreement",
            Content: "DRAFT CRUDE OIL SALE AGREEMENT...",
            Date_Information: {
              Created: "2023-09-10",
              Modified: "2023-10-05",
            },
            Document_Details: {
              Type: "Contract",
              Department: "Operations",
              Size: "4.0MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$200M",
          Ownership_structure: "50% / 50%",
        },
      },
      {
        id: "doc-004",
        title: "Invoice - DOC_MV23FW008231RRO_1_I8232012171",
        pdf_file: "DOC_MV23FW008231RRO_1_I8232012171.pdf",
        date: "2023-10-23",
        size: "2.6MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "due november", "trafigura"],
        content: [
          {
            Document_Summary: "Invoice with due date in November",
            Content:
              "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012171...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-05",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Finance",
              Size: "2.6MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$80M",
          Ownership_structure: "65% / 35%",
        },
      },
      {
        id: "doc-005",
        title: "Invoice - INV178629",
        pdf_file: "Invoice_INV178629_1697739314386.pdf",
        date: "2023-10-18",
        size: "2.8MB",
        author: "Trafigura Trading LLC",
        tags: ["invoice", "trafigura", "houston", "november"],
        content: [
          {
            Document_Summary: "Billing details for Trafigura Trading",
            Content: "INVOICE\n1 of 2\nBill To:\nTrafigura Trading LLC...",
            Date_Information: {
              Created: "2023-10-18",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Trading",
              Size: "2.8MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$90M",
          Ownership_structure: "55% / 45%",
        },
      },
    ],
  },
  {
    query: "contract between 23/10/2023 and 5/12/2023",
    answer: [
      {
        id: "doc-006",
        title: "Invoice - Trafigura VR22260",
        pdf_file: "Trafigura VR#VR22260 10-20-23.pdf",
        date: "2023-12-05",
        size: "3.0MB",
        author: "Trafigura",
        tags: ["invoice", "trafigura", "december", "vr22260"],
        content: [
          {
            Document_Summary: "Invoice dated 5/12/2023 for Trafigura VR22260",
            Content:
              "INVOICE VR22260\nINVOICE DATE: 5/12/2023\nTRAFIGURA VR# VR22260...",
            Date_Information: {
              Created: "2023-12-05",
              Modified: "2023-12-06",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Shipping",
              Size: "3.0MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$70M",
          Ownership_structure: "60% / 40%",
        },
      },
      {
        id: "doc-002",
        title: "Invoice - DOC_MV23FW007656RRO_1_I8232012170",
        pdf_file: "DOC_MV23FW007656RRO_1_I8232012170.pdf",
        date: "2023-10-23",
        size: "2.5MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "msc", "october", "due november"],
        content: [
          {
            Document_Summary: "Invoice issued on 23/10/2023",
            Content:
              "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012170...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Finance",
              Size: "2.5MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$50M",
          Ownership_structure: "70% / 30%",
        },
      },
      {
        id: "doc-004",
        title: "Invoice - DOC_MV23FW008231RRO_1_I8232012171",
        pdf_file: "DOC_MV23FW008231RRO_1_I8232012171.pdf",
        date: "2023-10-23",
        size: "2.6MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "due november", "trafigura"],
        content: [
          {
            Document_Summary: "Invoice with due date in November",
            Content:
              "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012171...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-05",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Finance",
              Size: "2.6MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$80M",
          Ownership_structure: "65% / 35%",
        },
      },
      {
        id: "doc-005",
        title: "Invoice - INV178629",
        pdf_file: "Invoice_INV178629_1697739314386.pdf",
        date: "2023-10-18",
        size: "2.8MB",
        author: "Trafigura Trading LLC",
        tags: ["invoice", "trafigura", "houston", "november"],
        content: [
          {
            Document_Summary: "Billing details for Trafigura Trading",
            Content: "INVOICE\n1 of 2\nBill To:\nTrafigura Trading LLC...",
            Date_Information: {
              Created: "2023-10-18",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Trading",
              Size: "2.8MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$90M",
          Ownership_structure: "55% / 45%",
        },
      },
      {
        id: "doc-007",
        title: "Invoice - INV178631",
        pdf_file: "Invoice_INV178631_1697739461140.pdf",
        date: "2023-10-18",
        size: "2.9MB",
        author: "Trafigura Trading LLC",
        tags: ["invoice", "trafigura", "houston", "november"],
        content: [
          {
            Document_Summary:
              "Billing details for Trafigura Trading - INV178631",
            Content: "INVOICE\n1 of 2\nBill To:\nTrafigura Trading LLC...",
            Date_Information: {
              Created: "2023-10-18",
              Modified: "2023-11-02",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Trading",
              Size: "2.9MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$75M",
          Ownership_structure: "50% / 50%",
        },
      },
    ],
  },
  {
    query:
      "Show me all invoices involving Trafigura PTE LTD with shipping from Malaysia.",
    answer: [
      {
        id: "doc-002",
        title: "Invoice - DOC_MV23FW007656RRO_1_I8232012170",
        pdf_file: "DOC_MV23FW007656RRO_1_I8232012170.pdf",
        date: "2023-10-23",
        size: "2.5MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "msc", "malaysia", "shipping"],
        content: [
          {
            Document_Summary: "Invoice showing shipping from Malaysia",
            Content:
              "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012170...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Shipping",
              Size: "2.5MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$50M",
          Ownership_structure: "70% / 30%",
        },
      },
      {
        id: "doc-004",
        title: "Invoice - DOC_MV23FW008231RRO_1_I8232012171",
        pdf_file: "DOC_MV23FW008231RRO_1_I8232012171.pdf",
        date: "2023-10-23",
        size: "2.6MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "malaysia", "trafigura", "shipping"],
        content: [
          {
            Document_Summary: "Invoice with shipment from Malaysia",
            Content:
              "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012171...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-05",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Logistics",
              Size: "2.6MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$80M",
          Ownership_structure: "65% / 35%",
        },
      },
      {
        id: "doc-001",
        title: "Invoice - CHBSL3716644",
        pdf_file: "CHBSL3716644.pdf",
        date: "2023-10-03",
        size: "3.1MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "malaysia", "trafigura", "msc"],
        content: [
          {
            Document_Summary:
              "Invoice between Traf and MSC with shipment details",
            Content:
              "038227\n1000340965\nTrafigura PTE LTD\nOcean Financial Centre...",
            Date_Information: {
              Created: "2023-10-03",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Legal",
              Size: "3.1MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$100M",
          Ownership_structure: "60% / 40%",
        },
      },
      {
        id: "doc-003",
        title: "Draft Crude Oil Contract",
        pdf_file: "oil_contract.pdf",
        date: "2023-09-10",
        size: "4.0MB",
        author: "ONGC",
        tags: ["contract", "malaysia", "oil", "trafigura"],
        content: [
          {
            Document_Summary: "Draft crude oil sale agreement from ONGC",
            Content: "DRAFT CRUDE OIL SALE AGREEMENT...",
            Date_Information: {
              Created: "2023-09-10",
              Modified: "2023-10-05",
            },
            Document_Details: {
              Type: "Contract",
              Department: "Operations",
              Size: "4.0MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$200M",
          Ownership_structure: "50% / 50%",
        },
      },
      {
        id: "doc-008",
        title: "Invoice - Trafigura VR22289",
        pdf_file: "Trafigura VR#22289 10-20-23.pdf",
        date: "2023-10-20",
        size: "3.2MB",
        author: "Trafigura",
        tags: ["invoice", "malaysia", "trafigura", "vr22289"],
        content: [
          {
            Document_Summary: "Invoice from Malaysia VR22289",
            Content:
              "INVOICE VR22289\nINVOICE DATE: 10/20/2023\nTRAFIGURA VR# VR22289...",
            Date_Information: {
              Created: "2023-10-20",
              Modified: "2023-10-21",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Shipping",
              Size: "3.2MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$60M",
          Ownership_structure: "55% / 45%",
        },
      },
    ],
  },
  {
    query:
      "Filter for invoices issued in October 2023 with due dates in November.",
    answer: [
      {
        id: "doc-002",
        title: "Invoice - DOC_MV23FW007656RRO_1_I8232012170",
        pdf_file: "DOC_MV23FW007656RRO_1_I8232012170.pdf",
        date: "2023-10-23",
        size: "2.5MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "october", "november due", "trafigura", "msc"],
        content: [
          {
            Document_Summary:
              "Invoice issued on 23/10/2023 with due date 22/11/2023",
            Content:
              "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012170\n10 COLLYER QUAY, #29-01/05, OCEAN F \nInvoice date\n23/10/2023\n049315 SINGAPORE\nDue date\n22/11/2023",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Finance",
              Size: "2.5MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$50M",
          Ownership_structure: "70% / 30%",
        },
      },
      {
        id: "doc-004",
        title: "Invoice - DOC_MV23FW008231RRO_1_I8232012171",
        pdf_file: "DOC_MV23FW008231RRO_1_I8232012171.pdf",
        date: "2023-10-23",
        size: "2.6MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "october", "november due", "trafigura"],
        content: [
          {
            Document_Summary:
              "Invoice issued on 23/10/2023 with due date 22/11/2023",
            Content:
              "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012171\n10 COLLYER QUAY, #29-01/05, OCEAN F \nInvoice date\n23/10/2023\n049315 SINGAPORE\nDue date\n22/11/2023",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-05",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Finance",
              Size: "2.6MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$80M",
          Ownership_structure: "65% / 35%",
        },
      },
      {
        id: "doc-008",
        title: "Invoice - Trafigura VR22289",
        pdf_file: "Trafigura VR#22289 10-20-23.pdf",
        date: "2023-10-20",
        size: "3.2MB",
        author: "Trafigura",
        tags: ["invoice", "october", "november due", "trafigura"],
        content: [
          {
            Document_Summary:
              "Invoice VR22289 issued in October, due in November",
            Content:
              "INVOICE\nVR22289\nINVOICE DATE:\n10/20/2023\nTRAFIGURA VR#\nVR22289\nRELEASE CONTACT Kane Altwasser\nTOTAL DUE:\nMumbaiServicePayment@trafigura.com",
            Date_Information: {
              Created: "2023-10-20",
              Modified: "2023-10-21",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Shipping",
              Size: "3.2MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$60M",
          Ownership_structure: "55% / 45%",
        },
      },
      {
        id: "doc-005",
        title: "Invoice - INV178629",
        pdf_file: "Invoice_INV178629_1697739314386.pdf",
        date: "2023-10-18",
        size: "2.8MB",
        author: "Trafigura Trading LLC",
        tags: ["invoice", "october", "houston", "november due"],
        content: [
          {
            Document_Summary: "Invoice issued in October, payment due November",
            Content:
              "INVOICE \n1 of 2\nBill To:\nTrafigura Trading LLC\n845 Texas Ave\nSuite 3600\nHouston TX 77002\nRemit Payment To:\n150 West Main Street, Suite 1600\nNorfolk, VA",
            Date_Information: {
              Created: "2023-10-18",
              Modified: "2023-11-01",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Trading",
              Size: "2.8MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$90M",
          Ownership_structure: "55% / 45%",
        },
      },
    ],
  },
  {
    query: "show me all invoices from counterparty MSC for 2024",
    answer: [
      {
        id: "doc-006",
        title: "Invoice - MSC20240123",
        pdf_file: "MSC20240123.pdf",
        date: "2024-01-23",
        size: "2.9MB",
        author: "MSC Mediterranean Shipping Company",
        tags: ["invoice", "msc", "2024", "q1", "shipping"],
        content: [
          {
            Document_Summary: "Q1 invoice from MSC to Trafigura",
            Content: "Invoice No. MSC20240123\nBilled to: Trafigura PTE LTD...",
            Date_Information: {
              Created: "2024-01-23",
              Modified: "2024-01-30",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Logistics",
              Size: "2.9MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$5M",
          Ownership_structure: "70% / 30%",
        },
      },
      {
        id: "doc-007",
        title: "Invoice - MSC20240415",
        pdf_file: "MSC20240415.pdf",
        date: "2024-04-15",
        size: "3.2MB",
        author: "MSC Mediterranean Shipping Company",
        tags: ["invoice", "msc", "q2", "trafigura"],
        content: [
          {
            Document_Summary: "Shipping invoice for crude container transport",
            Content: "Invoice No. MSC20240415\nService period: Mar-Apr 2024...",
            Date_Information: {
              Created: "2024-04-15",
              Modified: "2024-04-16",
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Shipping",
              Size: "3.2MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$7M",
          Ownership_structure: "60% / 40%",
        },
      },
    ],
  },
  {
    query:
      "provide me with a copy of the final DA for vessel Ocean Express, voyage 116, at port Rotterdam",
    answer: [
      {
        id: "doc-008",
        title: "Final DA - Ocean Express Voyage 116",
        pdf_file: "DA_OceanExpress116_Rotterdam.pdf",
        date: "2024-03-10",
        size: "2.1MB",
        author: "Port Agency Rotterdam",
        tags: ["final DA", "rotterdam", "voyage 116", "ocean express"],
        content: [
          {
            Document_Summary:
              "Final disbursement account for Ocean Express, voyage 116 at Rotterdam",
            Content:
              "FINAL DA\nVessel: Ocean Express\nVoyage: 116\nPort: Rotterdam...",
            Date_Information: {
              Created: "2024-03-10",
              Modified: "2024-03-12",
            },
            Document_Details: {
              Type: "Port Disbursement Account",
              Department: "Marine Ops",
              Size: "2.1MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$400K",
          Ownership_structure: "N/A",
        },
      },
    ],
  },
  {
    query: "what contracts are due to expire in the next 3 months",
    answer: [
      {
        id: "doc-009",
        title: "IT Service Contract - ABC Tech",
        pdf_file: "IT_Contract_ABC_Expiring_July2024.pdf",
        date: "2023-07-15",
        size: "1.9MB",
        author: "ABC Technologies",
        tags: ["contract", "it services", "expiry", "2024"],
        content: [
          {
            Document_Summary: "IT support contract set to expire in July 2024",
            Content:
              "Contract Agreement\nTerm: 12 months from signing...\nExpires: 2024-07-14",
            Date_Information: {
              Created: "2023-07-15",
              Modified: "2023-07-20",
            },
            Document_Details: {
              Type: "Contract",
              Department: "IT",
              Size: "1.9MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$1.2M",
          Ownership_structure: "100% Outsourced",
        },
      },
    ],
  },
  {
    query:
      "summarise the pricing terms used over the past 3 years for counterparty Glencore",
    answer: [
      {
        id: "doc-010",
        title: "Pricing Term Sheet - Copper 2021-2024",
        pdf_file: "Glencore_Pricing_Terms_Copper.pdf",
        date: "2024-01-01",
        size: "3.3MB",
        author: "Glencore Ltd.",
        tags: ["pricing", "terms", "glencore", "copper", "summary"],
        content: [
          {
            Document_Summary:
              "Summarized pricing terms for Glencore copper contracts",
            Content:
              "2021: LME + $80\n2022: LME + $90\n2023: LME + $75\n2024: LME + $88...",
            Date_Information: {
              Created: "2024-01-01",
              Modified: "2024-01-05",
            },
            Document_Details: {
              Type: "Term Sheet",
              Department: "Commodities",
              Size: "3.3MB",
            },
          },
        ],
        Calculated_Values: {
          Total_initial_investment: "$500M",
          Ownership_structure: "Trafigura exclusive buyer",
        },
      },
    ],
  },
];

const findDocumentsByExactQuery = (query: string): SearchResultItem[] => {
  console.log(`Looking for exact query match: "${query}" in mock data`);

  const normalizedQuery = query.toLowerCase();

  const exactQueryMatch = mockResults.find(
    (item) => item.query.toLowerCase() === normalizedQuery
  );

  if (exactQueryMatch) {
    console.log(
      `Found exact query match with ${exactQueryMatch.answer.length} documents`
    );
    return exactQueryMatch.answer;
  }

  console.log("No exact query match found");
  return [];
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface SearchOptions {
  query: string;
  filters: {
    documentType: string[];
    department: string[];
    confidentiality: string[];
    dateRange: DateRange;
    fileSize: string[];
    [key: string]: any;
  };
  persona: string;
}

export const searchDocuments = async (
  query: string,
  filters: any,
  persona: string
): Promise<SearchResultItem[]> => {
  console.log("Searching with:", { query, filters, persona });

  const searchOptions: SearchOptions = {
    query,
    filters: {
      ...filters,
      documentType: Array.isArray(filters.documentType)
        ? filters.documentType
        : [],
      department: Array.isArray(filters.department) ? filters.department : [],
      confidentiality: Array.isArray(filters.confidentiality)
        ? filters.confidentiality
        : [],
      fileSize: Array.isArray(filters.fileSize) ? filters.fileSize : [],
      dateRange: filters.dateRange || { from: undefined, to: undefined },
    },
    persona,
  };

  console.log("Processed search options:", searchOptions);

  await delay(800);

  return performSearch(searchOptions);
};

const performSearch = (options: SearchOptions): SearchResultItem[] => {
  console.log(`Starting search with query: "${options.query}"`);

  if (!options.query || options.query.trim() === "") {
    console.log("Empty query, returning empty results");
    return [];
  }

  let results = findDocumentsByExactQuery(options.query);

  if (results.length === 0) {
    for (const mockResult of mockResults) {
      if (
        options.query.toLowerCase().includes(mockResult.query.toLowerCase())
      ) {
        console.log(`Found partial query match: ${mockResult.query}`);
        results = mockResult.answer;
        break;
      }
    }
  }

  console.log(`Initial results before filtering: ${results.length} items`);

  results = applyFilters(results, options);

  console.log(`Final result count: ${results.length}`);
  return results;
};

const applyFilters = (
  results: SearchResultItem[],
  options: SearchOptions
): SearchResultItem[] => {
  let filteredResults = [...results];

  if (options.filters.documentType?.length > 0) {
    filteredResults = filteredResults.filter((item) => {
      const docType =
        item.type ||
        (item.content &&
          item.content[0]?.Document_Details?.Type?.toLowerCase());

      return docType && options.filters.documentType.includes(docType);
    });
    console.log(
      `After document type filter: ${filteredResults.length} results`
    );
  }

  // Filter by department
  if (options.filters.department?.length > 0) {
    filteredResults = filteredResults.filter((item) => {
      // Get department from either direct property or from content
      const department =
        item.department ||
        (item.content && item.content[0]?.Document_Details?.Department);

      return (
        department &&
        options.filters.department.some(
          (dept) => department.toLowerCase() === dept.toLowerCase()
        )
      );
    });
    console.log(`After department filter: ${filteredResults.length} results`);
  }

  // Filter by date range
  if (options.filters.dateRange?.from || options.filters.dateRange?.to) {
    filteredResults = filteredResults.filter((item) => {
      const itemDate = new Date(item.date);

      if (options.filters.dateRange.from && options.filters.dateRange.to) {
        return (
          itemDate >= options.filters.dateRange.from &&
          itemDate <= options.filters.dateRange.to
        );
      } else if (options.filters.dateRange.from) {
        return itemDate >= options.filters.dateRange.from;
      } else if (options.filters.dateRange.to) {
        return itemDate <= options.filters.dateRange.to;
      }

      return true;
    });
    console.log(`After date range filter: ${filteredResults.length} results`);
  }

  // Filter by file size
  if (options.filters.fileSize?.length > 0) {
    filteredResults = filteredResults.filter((item) => {
      const fileSizeString =
        item.fileSize ||
        item.size ||
        (item.content && item.content[0]?.Document_Details?.Size);

      if (!fileSizeString) return false;

      const sizeMatch = fileSizeString.match(/(\d+\.?\d*)/);
      if (!sizeMatch) return false;

      const size = parseFloat(sizeMatch[0]);

      if (options.filters.fileSize.includes("small") && size < 2) {
        return true;
      }
      if (
        options.filters.fileSize.includes("medium") &&
        size >= 2 &&
        size <= 5
      ) {
        return true;
      }
      if (options.filters.fileSize.includes("large") && size > 5) {
        return true;
      }
      return false;
    });
    console.log(`After file size filter: ${filteredResults.length} results`);
  }

  if (options.persona !== "all") {
    const personaToDeptMap: Record<string, string[]> = {
      trading: ["Trading"],
      legal: ["Legal"],
      operations: ["Operations"],
      finance: ["Finance"],
      data: ["Data Analytics"],
      shipping: ["Shipping"],
      hr: ["HR"],
      it: ["IT"],
    };

    const relevantDepartments = personaToDeptMap[options.persona] || [];
    if (relevantDepartments.length > 0) {
      filteredResults = filteredResults.filter((item) => {
        // Get department from either direct property or from content
        const department =
          item.department ||
          (item.content && item.content[0]?.Document_Details?.Department);

        return department && relevantDepartments.includes(department);
      });
      console.log(`After persona filter: ${filteredResults.length} results`);
    }
  }

  return filteredResults;
};
