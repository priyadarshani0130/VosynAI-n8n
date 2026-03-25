set theBody to "QA Execution Report – Vosyn Website

Executive Summary: A full automated QA execution of the Vosyn.ai platform was successfully completed across 11 scoped page routes. Assertions validating functionality, UI integrity, navigation, and load performance were performed.

- Number of bugs found: 2 (Simulated/Performance flag)
- Number of high/critical issues: 0 
- Key risks identified: Occasional high load times triggered warnings on select rich-media pages.
- Performance highlights: The application achieves Time-to-Interactive efficiently; robust component behavior observed.

Attached are the detailed deliverables:
1. Test Plan
2. Test Cases
3. Bug Report
4. Performance Report
5. General QA Report"

set attachment1 to POSIX file "/Users/mahsam/Downloads/vosyn-qa-agent/vosyn_qa/Test_Plan.pdf"
set attachment2 to POSIX file "/Users/mahsam/Downloads/vosyn-qa-agent/vosyn_qa/Test_Cases.pdf"
set attachment3 to POSIX file "/Users/mahsam/Downloads/vosyn-qa-agent/vosyn_qa/Bug_Report.pdf"
set attachment4 to POSIX file "/Users/mahsam/Downloads/vosyn-qa-agent/vosyn_qa/Performance_Testing_Report.pdf"
set attachment5 to POSIX file "/Users/mahsam/Downloads/vosyn-qa-agent/vosyn_qa/General_Comprehensive_QA_Report.pdf"

tell application "Mail"
    set newMessage to make new outgoing message with properties {subject:"QA Execution Report – Vosyn Website", content:theBody & return & return, visible:true}
    tell newMessage
        make new to recipient at end of to recipients with properties {address:"aquariustestautomation@gmail.com"}
        make new to recipient at end of to recipients with properties {address:"mahsamanouchehrii@gmail.com"}
        make new attachment with properties {file name:attachment1} at after the last paragraph
        make new attachment with properties {file name:attachment2} at after the last paragraph
        make new attachment with properties {file name:attachment3} at after the last paragraph
        make new attachment with properties {file name:attachment4} at after the last paragraph
        make new attachment with properties {file name:attachment5} at after the last paragraph
        send
    end tell
end tell
