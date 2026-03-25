tell application "Mail"
    set newMessage to make new outgoing message with properties {subject:"Vosyn.ai QA Deliverables: Test Plan, Cases & Bug Report", content:"Hello,\n\nPlease find the requested QA documentation attached:\n\n1. Master Test Plan\n2. Test Cases Overview\n3. Automated Bug Report detailing failures found during our 100-case regression suite.\n\nBest,\nQA Agent", visible:true}
    tell newMessage
        make new to recipient at end of to recipients with properties {address:"aquariustestautomation@gmail.com"}
        tell content
            make new attachment with properties {file name:"/Users/mahsam/Downloads/vosyn-qa-agent/Vosyn_Test_Plan.pdf" as POSIX file} at after the last paragraph
            make new attachment with properties {file name:"/Users/mahsam/Downloads/vosyn-qa-agent/Vosyn_Test_Cases.pdf" as POSIX file} at after the last paragraph
            make new attachment with properties {file name:"/Users/mahsam/Downloads/vosyn-qa-agent/Vosyn_Bug_Report.pdf" as POSIX file} at after the last paragraph
        end tell
    end tell
    activate
end tell
