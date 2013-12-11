describe("Jar", function(){
  it("should build a jar", function(){
    var jar = new Jar("commons-lang", "3.0");
    expect(jar.name).toEqual("commons-lang");
    expect(jar.version).toEqual("3.0");
    expect(jar.classes).toEqual([]);
  });
  it("should add class to a jar", function(){
    var jar = new Jar("commons-lang", "3.0");
    jar.addClass(new Class("MyClass"));
    expect(jar.classes.length).toBe(1);
    expect(jar.classes[0].name).toEqual("MyClass");
  });
});

describe("Class", function(){
  describe("build class", function(){
    it("should build a class wheng given package name", function(){
      var clz = new Class("clz", "com.aqingsao");

      expect(clz.name).toEqual("clz");
      expect(clz.package.name).toEqual("com.aqingsao");
      expect(clz.methods.length).toBe(0);
      expect(clz.fields.length).toBe(0);
    });
    it("should build a class when not given package name", function(){
      var clz = new Class("clz");

      expect(clz.name).toEqual("clz");
      expect(clz.package.name).toEqual("");
      expect(clz.methods.length).toBe(0);
      expect(clz.fields.length).toBe(0);
    });
  });

  describe("qualifiedName", function(){
    it("should return qualified name when given package", function(){
      var clz = new Class("clz", "com.aqingsao");

      expect(clz.qualifiedName()).toEqual("com.aqingsao.clz");
    })

    it("should return qualified name when not given package", function(){
      var clz = new Class("clz");

      expect(clz.qualifiedName()).toEqual("clz");
    })
  });
});

describe("Method", function(){
  it("should build a class", function(){
    var method = new Method('public', ['static', 'final'], "trim", "String", ["String", "int"]);

    expect(method.accessType).toEqual("public");
    expect(method.modifiers).toEqual(["static", "final"]);
    expect(method.name).toEqual("trim");
    expect(method.returnType).toEqual("String");
    expect(method.arguments).toEqual(["String", "int"]);
  });
});

describe("Method", function(){
  describe("getTitle", function(){
    it("should return title public void trim()", function(){
      var method = new Method('public', [], "trim", "void", []);
      expect(method.getTitle()).toEqual("public void trim()");
    })
    it("should return title private String trim()", function(){
      var method = new Method('private', [], "trim", "String", []);
      expect(method.getTitle()).toEqual("private String trim()");
    })
    it("should return title protected static final String trim()", function(){
      var method = new Method('protected', ["static", "final"], "trim", "String", []);
      expect(method.getTitle()).toEqual("protected static final String trim()");
    })
    it("should return title private String trim(int)", function(){
      var method = new Method('private', [], "trim", "String", ["int"]);
      expect(method.getTitle()).toEqual("private String trim(int)");
    })
    it("should return title private String trim(int, String)", function(){
      var method = new Method('private', [], "trim", "String", ["int", "String"]);
      expect(method.getTitle()).toEqual("private String trim(int, String)");
    })
  });
});
describe("Field", function(){
  describe("getTitle", function(){
    it("should return public void EMPTY", function(){
      var field = new Field('public', [], "EMPTY", "void");
      expect(field.getTitle()).toEqual("public void EMPTY");
    })
    it("should return private String EMPTY", function(){
      var field = new Field('private', [], "EMPTY", "String");
      expect(field.getTitle()).toEqual("private String EMPTY");
    })
    it("should return protected static final String EMPTY", function(){
      var field = new Field('protected', ["static", "final"], "EMPTY", "String");
      expect(field.getTitle()).toEqual("protected static final String EMPTY");
    })
  });
});
