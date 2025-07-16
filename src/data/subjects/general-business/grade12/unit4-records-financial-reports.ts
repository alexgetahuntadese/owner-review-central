
import { Chapter } from '../../../types';

export const unit4RecordsFinancialReports: Chapter = {
  id: 'gb_grade12_unit4',
  name: 'Unit 4: Business Records-Keeping & Financial Reports',
  description: 'Accounting fundamentals, financial statements, business transactions, and petty cash management',
  questions: [
    // Easy Questions (15)
    {
      id: 'gb_u4_easy_1',
      question: 'What is accounting?',
      options: ['Counting money only', 'Recording, summarizing, and communicating financial information', 'Banking services', 'Investment advice'],
      correct: 'Recording, summarizing, and communicating financial information',
      explanation: 'Accounting is the systematic recording, measuring, and communication of financial information about a business.',
      difficulty: 'easy',
      topic: 'What is Accounting?'
    },
    {
      id: 'gb_u4_easy_2',
      question: 'Why is accounting important for businesses?',
      options: ['Not important', 'Helps track performance and make informed decisions', 'Only for large companies', 'Legal requirement only'],
      correct: 'Helps track performance and make informed decisions',
      explanation: 'Accounting helps businesses track their financial performance and make informed business decisions.',
      difficulty: 'easy',
      topic: 'Importance of Accounting'
    },
    {
      id: 'gb_u4_easy_3',
      question: 'What is a balance sheet?',
      options: ['Income statement', 'Statement showing assets, liabilities, and equity at a point in time', 'Cash flow statement', 'Budget plan'],
      correct: 'Statement showing assets, liabilities, and equity at a point in time',
      explanation: 'A balance sheet shows a company\'s financial position by listing assets, liabilities, and owner\'s equity at a specific date.',
      difficulty: 'easy',
      topic: 'The Beginning Balance Sheet'
    },
    {
      id: 'gb_u4_easy_4',
      question: 'What are assets?',
      options: ['Money owed to others', 'Resources owned by the business', 'Business expenses', 'Owner investments'],
      correct: 'Resources owned by the business',
      explanation: 'Assets are resources owned by a business that have economic value and can provide future benefits.',
      difficulty: 'easy',
      topic: 'The Beginning Balance Sheet'
    },
    {
      id: 'gb_u4_easy_5',
      question: 'What are liabilities?',
      options: ['Assets owned', 'Debts and obligations owed by the business', 'Business income', 'Owner contributions'],
      correct: 'Debts and obligations owed by the business',
      explanation: 'Liabilities are debts and financial obligations that a business owes to others.',
      difficulty: 'easy',
      topic: 'The Beginning Balance Sheet'
    },
    {
      id: 'gb_u4_easy_6',
      question: 'What is owner\'s equity?',
      options: ['Business debts', 'Owner\'s claim on business assets', 'Business income', 'Business expenses'],
      correct: 'Owner\'s claim on business assets',
      explanation: 'Owner\'s equity represents the owner\'s financial interest or claim on the business assets.',
      difficulty: 'easy',
      topic: 'The Beginning Balance Sheet'
    },
    {
      id: 'gb_u4_easy_7',
      question: 'What is a business transaction?',
      options: ['Business meeting', 'Economic event that affects the financial position of business', 'Employee hiring', 'Marketing activity'],
      correct: 'Economic event that affects the financial position of business',
      explanation: 'A business transaction is any economic event that has a measurable impact on the financial position of a business.',
      difficulty: 'easy',
      topic: 'Business Transactions'
    },
    {
      id: 'gb_u4_easy_8',
      question: 'What is revenue?',
      options: ['Money spent', 'Money earned from business operations', 'Money borrowed', 'Money invested'],
      correct: 'Money earned from business operations',
      explanation: 'Revenue is the income earned by a business from its normal operations, such as selling goods or services.',
      difficulty: 'easy',
      topic: 'Income and Expense Accounts'
    },
    {
      id: 'gb_u4_easy_9',
      question: 'What are expenses?',
      options: ['Money earned', 'Costs incurred in business operations', 'Assets purchased', 'Debts owed'],
      correct: 'Costs incurred in business operations',
      explanation: 'Expenses are costs incurred by a business in the process of earning revenue.',
      difficulty: 'easy',
      topic: 'Income and Expense Accounts'
    },
    {
      id: 'gb_u4_easy_10',
      question: 'What is net income?',
      options: ['Total revenue', 'Revenue minus expenses', 'Total expenses', 'Cash received'],
      correct: 'Revenue minus expenses',
      explanation: 'Net income is the profit earned by a business, calculated as revenue minus expenses.',
      difficulty: 'easy',
      topic: 'Income and Expense Accounts'
    },
    {
      id: 'gb_u4_easy_11',
      question: 'What is posting in accounting?',
      options: ['Mailing documents', 'Transferring journal entries to ledger accounts', 'Advertising', 'Sending invoices'],
      correct: 'Transferring journal entries to ledger accounts',
      explanation: 'Posting is the process of transferring information from journal entries to the appropriate ledger accounts.',
      difficulty: 'easy',
      topic: 'Posting the Opening Entry'
    },
    {
      id: 'gb_u4_easy_12',
      question: 'What is a worksheet in accounting?',
      options: ['Employee schedule', 'Tool used to prepare financial statements', 'Business plan', 'Marketing document'],
      correct: 'Tool used to prepare financial statements',
      explanation: 'A worksheet is an accounting tool used to organize and summarize account balances when preparing financial statements.',
      difficulty: 'easy',
      topic: 'The Six-Column Worksheet'
    },
    {
      id: 'gb_u4_easy_13',
      question: 'What are financial statements?',
      options: ['Bank documents', 'Reports showing financial performance and position', 'Tax forms', 'Insurance policies'],
      correct: 'Reports showing financial performance and position',
      explanation: 'Financial statements are formal reports that show the financial performance and position of a business.',
      difficulty: 'easy',
      topic: 'Financial Statements'
    },
    {
      id: 'gb_u4_easy_14',
      question: 'What is petty cash?',
      options: ['Large cash fund', 'Small amount of cash for minor expenses', 'Bank account', 'Credit card'],
      correct: 'Small amount of cash for minor expenses',
      explanation: 'Petty cash is a small amount of cash kept on hand to pay for minor business expenses.',
      difficulty: 'easy',
      topic: 'The Petty Cash Fund'
    },
    {
      id: 'gb_u4_easy_15',
      question: 'What is an opening entry?',
      options: ['First sale', 'Initial journal entry to record beginning balances', 'Last transaction', 'Monthly summary'],
      correct: 'Initial journal entry to record beginning balances',
      explanation: 'An opening entry is the first journal entry made to record the beginning balances of accounts.',
      difficulty: 'easy',
      topic: 'Recording the Opening Entry'
    },

    // Medium Questions (8)
    {
      id: 'gb_u4_med_1',
      question: 'What is the accounting equation?',
      options: ['Revenue - Expenses = Profit', 'Assets = Liabilities + Owner\'s Equity', 'Income = Expenses + Savings', 'Sales = Costs + Margin'],
      correct: 'Assets = Liabilities + Owner\'s Equity',
      explanation: 'The fundamental accounting equation states that Assets = Liabilities + Owner\'s Equity.',
      difficulty: 'medium',
      topic: 'The Beginning Balance Sheet'
    },
    {
      id: 'gb_u4_med_2',
      question: 'What are the main types of financial statements?',
      options: ['Only balance sheet', 'Balance sheet, income statement, cash flow statement', 'Only income statement', 'Only cash records'],
      correct: 'Balance sheet, income statement, cash flow statement',
      explanation: 'The main financial statements are the balance sheet, income statement, and cash flow statement.',
      difficulty: 'medium',
      topic: 'Financial Statements'
    },
    {
      id: 'gb_u4_med_3',
      question: 'What is the difference between current and non-current assets?',
      options: ['No difference', 'Current assets are short-term, non-current are long-term', 'Current are expensive, non-current are cheap', 'Current are liquid, non-current are solid'],
      correct: 'Current assets are short-term, non-current are long-term',
      explanation: 'Current assets can be converted to cash within one year, while non-current assets are held for longer periods.',
      difficulty: 'medium',
      topic: 'The Beginning Balance Sheet'
    },
    {
      id: 'gb_u4_med_4',
      question: 'What is double-entry bookkeeping?',
      options: ['Recording twice', 'Every transaction affects at least two accounts', 'Using two books', 'Two people recording'],
      correct: 'Every transaction affects at least two accounts',
      explanation: 'Double-entry bookkeeping requires that every transaction affects at least two accounts, with total debits equaling total credits.',
      difficulty: 'medium',
      topic: 'Business Transactions'
    },
    {
      id: 'gb_u4_med_5',
      question: 'What is depreciation?',
      options: ['Asset appreciation', 'Allocation of asset cost over its useful life', 'Asset sale', 'Asset purchase'],
      correct: 'Allocation of asset cost over its useful life',
      explanation: 'Depreciation is the systematic allocation of an asset\'s cost over its estimated useful life.',
      difficulty: 'medium',
      topic: 'Income and Expense Accounts'
    },
    {
      id: 'gb_u4_med_6',
      question: 'What is the purpose of a trial balance?',
      options: ['Final statement', 'Check if debits equal credits', 'Customer list', 'Inventory count'],
      correct: 'Check if debits equal credits',
      explanation: 'A trial balance is used to verify that the total of all debits equals the total of all credits in the ledger.',
      difficulty: 'medium',
      topic: 'The Six-Column Worksheet'
    },
    {
      id: 'gb_u4_med_7',
      question: 'What is accounts receivable?',
      options: ['Money owed to suppliers', 'Money owed by customers', 'Cash in bank', 'Inventory items'],
      correct: 'Money owed by customers',
      explanation: 'Accounts receivable represents money owed to the business by customers for goods or services sold on credit.',
      difficulty: 'medium',
      topic: 'Business Transactions'
    },
    {
      id: 'gb_u4_med_8',
      question: 'What is accounts payable?',
      options: ['Money owed by customers', 'Money owed to suppliers', 'Bank balance', 'Cash payments'],
      correct: 'Money owed to suppliers',
      explanation: 'Accounts payable represents money the business owes to suppliers for goods or services purchased on credit.',
      difficulty: 'medium',
      topic: 'Business Transactions'
    },

    // Hard Questions (5)
    {
      id: 'gb_u4_hard_1',
      question: 'What is working capital?',
      options: ['Total capital', 'Current assets minus current liabilities', 'Fixed assets', 'Long-term debt'],
      correct: 'Current assets minus current liabilities',
      explanation: 'Working capital is the difference between current assets and current liabilities, indicating short-term financial health.',
      difficulty: 'hard',
      topic: 'Financial Statements'
    },
    {
      id: 'gb_u4_hard_2',
      question: 'What is the accrual basis of accounting?',
      options: ['Recording only cash transactions', 'Recording transactions when they occur, regardless of cash flow', 'Recording only credit transactions', 'Recording monthly only'],
      correct: 'Recording transactions when they occur, regardless of cash flow',
      explanation: 'Accrual accounting records transactions when they occur, regardless of when cash is received or paid.',
      difficulty: 'hard',
      topic: 'Business Transactions'
    },
    {
      id: 'gb_u4_hard_3',
      question: 'What is the matching principle?',
      options: ['Matching assets and liabilities', 'Matching revenues with related expenses in same period', 'Matching debits and credits', 'Matching cash flows'],
      correct: 'Matching revenues with related expenses in same period',
      explanation: 'The matching principle requires that expenses be matched with the revenues they help generate in the same accounting period.',
      difficulty: 'hard',
      topic: 'Income and Expense Accounts'
    },
    {
      id: 'gb_u4_hard_4',
      question: 'What is the conservatism principle in accounting?',
      options: ['Using old methods', 'Choosing methods that least overstate assets and income', 'Avoiding changes', 'Minimizing costs'],
      correct: 'Choosing methods that least overstate assets and income',
      explanation: 'The conservatism principle suggests choosing accounting methods that are least likely to overstate assets and income.',
      difficulty: 'hard',
      topic: 'Importance of Accounting'
    },
    {
      id: 'gb_u4_hard_5',
      question: 'What is the difference between gross profit and net profit?',
      options: ['No difference', 'Gross profit is before operating expenses, net profit is after all expenses', 'Gross is larger', 'Net is before taxes'],
      correct: 'Gross profit is before operating expenses, net profit is after all expenses',
      explanation: 'Gross profit is revenue minus cost of goods sold; net profit is gross profit minus all operating expenses and other costs.',
      difficulty: 'hard',
      topic: 'Income and Expense Accounts'
    }
  ]
};
