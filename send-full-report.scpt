tell application "Mail"
    set newMessage to make new outgoing message with properties {subject:"[Vosyn QA] Comprehensive Full-Site Functional & UX Report", content:"Hello,\n\nPlease find the attached Comprehensive QA Report generated from the execution of the 11 primary corporate routes of the vosyn.ai website.\n\nIncluded in this single unified document:\n1. Execution Performance Breakdown\n2. Master Test Plan & Scope\n3. 35 Baseline Test Scenarios (Including 5 Edge Cases)\n4. Active Bug Execution Identifications (Status: WAF Network Barrier)\n\nThis material is finalized and formatted for executive review.\n\nBest,\nAutomated QA Agent", visible:true}
    tell newMessage
        make new to recipient at end of to recipients with properties {address:"aquariustestautomation@gmail.com"}
        tell content
            make new attachment with properties {file name:"/Users/mahsam/Downloads/vosyn-qa-agent/Vosyn_Full_Site_QA_Report.pdf" as POSIX file} at after the last paragraph
        end tell
    end tell
    activate
end tell
