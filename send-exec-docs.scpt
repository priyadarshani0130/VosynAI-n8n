tell application "Mail"
    set newMessage to make new outgoing message with properties {subject:"[Executive Summary] Vosyn.ai - Quality & Risk Assessment", content:"Hello,\n\nPlease find the attached Executive Quality Review outlining the outcomes, insights, and strategic risks discovered during the exhaustive automated testing of the Vosyn.ai platform.\n\nThis polished report is tailored for leadership review and decision-making.\n\nBest,\nAutomated QA Operations", visible:true}
    tell newMessage
        make new to recipient at end of to recipients with properties {address:"aquariustestautomation@gmail.com"}
        tell content
            make new attachment with properties {file name:"/Users/mahsam/Downloads/vosyn-qa-agent/Vosyn_Executive_QA_Report.pdf" as POSIX file} at after the last paragraph
        end tell
    end tell
    activate
end tell
