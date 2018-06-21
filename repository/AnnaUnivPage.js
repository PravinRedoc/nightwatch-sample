module.exports={
    sections : {
        AnnaUnivPage_section : {
            selector: "body",
            elements: {
                Departments: {selector: "/html/body/table/tbody/tr[1]/td[1]/table/tbody/tr/td[1]/table/tbody/tr/td/table/tbody/tr/td[5]/div/a",
                locateStrategy:'xpath'},
                Faculty_Civil_Engineering: {selector: 'a[name=link13]'},
                Institute_Ocean_Management: {selector: '#menuItemHilite33'},
                Research_Themes: {selector: '#link3'},
                Coastal_Monitoring_Hazards: {selector: '#menuItemHilite13'}
            }
        }

    }


};