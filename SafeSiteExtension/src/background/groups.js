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
    BankBPH: new Group("Bank BPH", categories.bank),
    BankMillenium: new Group("Bank Millenium", categories.bank),
    BankNowyBGF: new Group("Bank Nowy BGF S.A.", categories.bank),
    BankOfChina: new Group("BANK OF CHINA", categories.bank),
    BankPekao: new Group("Bank Pekao", categories.bank),
    BankPocztowy: new Group("Bank Pocztowy", categories.bank),
    BGK: new Group("BGK", categories.bank),
    BOSBank: new Group("BOŚ Bank", categories.bank),
    BNPParibas: new Group("BNP PARIBAS", categories.bank),
    CaixaBank: new Group("CaixaBank", categories.bank),
    ChinaConstructionBank: new Group("China Construction Bank", categories.bank),
    Citibank: new Group("Citibank", categories.bank),
    CitiHandlowy: new Group("Citi Handlowy", categories.bank),
    CreditAgricole: new Group("Crédit Agricole", categories.bank),
    DanskeBank: new Group("Danske Bank", categories.bank),
    DeutscheBank: new Group("Deutsche Bank", categories.bank),
    DNBBankPolska: new Group("DNB Bank Polska S.A.", categories.bank),
    Euroclear: new Group("Euroclear", categories.bank),
    FCABank: new Group("FCA Bank", categories.bank),
    FCEBank: new Group("FCE Bank - Ford Credit", categories.bank),
    GetinBank: new Group("Getin Bank", categories.bank),
    GrupaBPS: new Group("Grupa BPS", categories.bank),
    Haitong: new Group("Haitong", categories.bank),
    HSBC: new Group("HSBC", categories.bank),
    ICBC: new Group("Industrial and Commercial Bank of China (ICBC)", categories.bank),
    IdeaBank: new Group("Idea Bank", categories.bank),
    IkanoBank: new Group("Ikano Bank", categories.bank),
    Inbank: new Group("Inbank", categories.bank),
    IngBankSlaski: new Group("ING Bank Śląski", categories.bank),
    IntesaSanpaolo: new Group("Intesa Sanpaolo", categories.bank),
    JohnDeereBank: new Group("John Deere Bank", categories.bank),
    JPMorgan: new Group("J.P. Morgan", categories.bank),
    MBank: new Group("mBank", categories.bank),
    MercedesBenzBank: new Group("Mercedes-Benz Bank", categories.bank),
    MUFGBank: new Group("MUFG Bank", categories.bank),
    NestBank: new Group("Nest Bank", categories.bank),
    NobleBank: new Group("Noble Bank", categories.bank),
    Nordea: new Group("Nordea", categories.bank),
    Nykredit: new Group("Nykredit", categories.bank),
    PKOBP: new Group("PKO Bank Polski S.A.", categories.bank),
    PlusBank: new Group("Plus Bank", categories.bank),
    BankPSAFinance: new Group("BANQUE PSA FINANCE S.A.", categories.bank),
    RaiffeisenBank: new Group("Raiffeisen Bank International", categories.bank),
    RCIBanque: new Group("RCI Banque S.A.", categories.bank),
    Santander: new Group("Santander", categories.bank),
    SEB: new Group("S|E|B", categories.bank),
    SGBBank: new Group("SGB Bank S.A.", categories.bank),
    SocieteGenerale: new Group("Société Générale", categories.bank),
    SvenskaHandelsbanken: new Group("Svenska Handelsbanken AB", categories.bank),
    TFBank: new Group("TF Bank", categories.bank),
    ToyotaBank: new Group("Toyota Bank", categories.bank),
    UBS: new Group("UBS Group AG", categories.bank),
    VWBank: new Group("Volkswagen Bank", categories.bank),

    ElavonPayment: new Group("Elavon", categories.payment),
    WesternUnion: new Group("Western Union", categories.payment),
};
