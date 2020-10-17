class Group
{
    constructor(name, category, icon)
    {
        this.name = name;
        this.categories = category
        this.icon = icon === undefined ? category.icon : icon;
    }
}

var groups = 
{
    AarealBank: new Group("Aareal Bank", categories.bank),
    AliorBank: new Group("Alior Bank", categories.bank),
    BankBPS: new Group("Bank BPS", categories.bank),
    BankMillenium: new Group("Bank Millenium", categories.bank),
    BankOfChina: new Group("BANK OF CHINA", categories.bank),
    BankPekao: new Group("Bank Pekao", categories.bank),
    BankPocztowy: new Group("Bank Pocztowy", categories.bank),
    BOSBank: new Group("BOŚ Bank", categories.bank),
    BNPParibas: new Group("BNP PARIBAS", categories.bank),
    CitiHandlowy: new Group("Citi Handlowy", categories.bank),
    CreditAgricole: new Group("Crédit Agricole", categories.bank),
    DeutscheBank: new Group("Deutsche Bank", categories.bank),
    DNBBankPolska: new Group("DNB Bank Polska S.A.", categories.bank),
    GetinBank: new Group("Getin Bank", categories.bank),
    IdeaBank: new Group("Idea Bank", categories.bank),
    Inbank: new Group("Inbank", categories.bank),
    IngBankSlaski: new Group("ING Bank Śląski", categories.bank),
    MBank: new Group("mBank", categories.bank),
    NestBank: new Group("Nest Bank", categories.bank),
    NobleBank: new Group("Noble Bank", categories.bank),
    PKOBP: new Group("PKO Bank Polski S.A.", categories.bank),
    PlusBank: new Group("Plus Bank", categories.bank),
    BankPSAFinance: new Group("BANQUE PSA FINANCE S.A.", categories.bank),
    RaiffeisenBank: new Group("Raiffeisen Bank International", categories.bank),
    Santander: new Group("Santander", categories.bank),
    SGBBank: new Group("SGB Bank S.A.", categories.bank),
};
