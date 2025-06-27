@interface ViewController ()

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    // do any additional se4tup after loading the view, typically from a nib.

    // 64 bit machine will result in increase memory range for variables

    // static: first time the method is called it will create the variable, but susbequent times it will not create the variable again and it will retain its value that you set
    static short myShort = 60000;

    // unsigned: drops the negative range and doubles the positive range
    unsigned short myShort = 60000;

    // constant: a value that never changes
    const short myShort = 60000;

    short myShort = 60000;

    int myInt = 1000000;

    char myChar = 'a';

    float myFloat = 500.0f;

    double myDouble = 600.0;

    BOOL myBool = YES;

    id myObject = self;
}