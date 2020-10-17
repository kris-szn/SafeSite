class SafeSite
{
    constructor(group, domain, name, domain_std, icon)
    {
        this.group = group;
        this.domain = domain;
        this.name = name === undefined ? group.name : name;
        this.domain_std = domain_std === undefined ? domain : domain_std;
        this.icon = icon === undefined ? group.icon : icon;
    }
}

var safeSites = 
[
    new SafeSite(groups.AarealBank, "aareal-bank.com"),
    new SafeSite(groups.AarealBank, "aareal.com"),

    new SafeSite(groups.AliorBank, "aliorbank.pl"),

    new SafeSite(groups.BankBPS, "bankbps.pl"),
    new SafeSite(groups.BankBPS, "e25.pl"),

    new SafeSite(groups.BankMillenium, "bankmillennium.pl"),

    new SafeSite(groups.BankOfChina, "bankofchina.com"),

    new SafeSite(groups.BankPekao, "pekao.com.pl"),
    new SafeSite(groups.BankPekao, "pekao24.pl"),
    new SafeSite(groups.BankPekao, "pekaobiznes24.pl"),
    new SafeSite(groups.BankPekao, "cdm24.pl", "Bank Pekao CDM24"),

    new SafeSite(groups.BankPocztowy, "pocztowy.pl"),
    new SafeSite(groups.BankPocztowy, "pocztowy24.pl"),
    new SafeSite(groups.BankPocztowy, "envelobank.pl", "Bank Pocztowy - EnveloBank"),

    new SafeSite(groups.BOSBank, "bosbank.pl"),
    new SafeSite(groups.BOSBank, "bosbank24.pl"),
    new SafeSite(groups.BOSBank, "iboss24.pl"),

    new SafeSite(groups.BNPParibas, "bnpparibas.pl"),
    new SafeSite(groups.BNPParibas, "webmakler.pl", "BNP PARIBAS Biuro Maklerskie"),

    new SafeSite(groups.CitiHandlowy, "citibank.pl"),
    new SafeSite(groups.CitiHandlowy, "citibankonline.pl"),
    new SafeSite(groups.CitiHandlowy, "dmbh.pl", "Dom Maklerski Citi Handlowy"),
    new SafeSite(groups.CitiHandlowy, "citidirect.com", "CitiDirect BE®"),

    new SafeSite(groups.CreditAgricole, "credit-agricole.pl"),

    new SafeSite(groups.DeutscheBank, "db.com"),
    new SafeSite(groups.DeutscheBank, "deutschebank.com"),

    new SafeSite(groups.DNBBankPolska, "dnb.pl"),
    new SafeSite(groups.DNBBankPolska, "dnbon.pl"),

    new SafeSite(groups.GetinBank, "getinbank.pl"),
    new SafeSite(groups.GetinBank, "gnb.pl", "Getin Noble Bank"),

    new SafeSite(groups.IdeaBank, "ideabank.pl"),

    new SafeSite(groups.Inbank, "inbankpolska.pl"),

    new SafeSite(groups.IngBankSlaski, "ing.pl"),
    new SafeSite(groups.IngBankSlaski, "ingbank.pl"),

    new SafeSite(groups.MBank, "mbank.pl"),

    new SafeSite(groups.NestBank, "nestbank.pl"),

    new SafeSite(groups.NobleBank, "noblebank.pl"),
    new SafeSite(groups.NobleBank, "noblesecurities.pl", "Noble Securities Dom Maklerski"),

    new SafeSite(groups.PKOBP, "pkobp.pl"),
    new SafeSite(groups.PKOBP, "ipko.pl"),
    
    new SafeSite(groups.PlusBank, "plusbank.pl"),
    new SafeSite(groups.PlusBank, "plusbank24.pl"),

    new SafeSite(groups.BankPSAFinance, "e-psafinance.pl"),

    new SafeSite(groups.RaiffeisenBank, "rbinternational.com.pl"),

    new SafeSite(groups.Santander, "santander.pl"),
    new SafeSite(groups.Santander, "centrum24.pl"),
    new SafeSite(groups.Santander, "ibiznes24.pl"),
    new SafeSite(groups.Santander, "inwestoronline.pl", "Santander Biuro Maklerskie"),
    new SafeSite(groups.Santander, "santanderconsumer.pl", "Santander Consumer Bank"),
 
    new SafeSite(groups.SGBBank, "sgb.pl"),
    new SafeSite(groups.SGBBank, "sgb24.pl"),
]