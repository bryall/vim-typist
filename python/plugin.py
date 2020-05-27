print("Hello from Python source code in plugin.py")

try:
    import vim
except:
    print("No vim module available outside of vim")
    pass

