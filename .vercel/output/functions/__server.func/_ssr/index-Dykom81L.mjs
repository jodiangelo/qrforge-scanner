import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { Q as QRCode } from "../_libs/qrcode.mjs";
import { H as Html5Qrcode } from "../_libs/html5-qrcode.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root2, L as List, T as Trigger, C as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { R as Root2$1, V as Value, T as Trigger$1, I as Icon, P as Portal, C as Content2, a as Viewport, b as Item, c as ItemIndicator, d as ItemText, S as ScrollUpButton, e as ScrollDownButton, L as Label$1, f as Separator } from "../_libs/radix-ui__react-select.mjs";
import { R as Root$1, T as Track, a as Range, b as Thumb } from "../_libs/radix-ui__react-slider.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { Q as QrCode, S as ScanLine, T as Type, L as Link, W as Wifi, M as Mail, a as MessageSquare, P as Phone, U as User, D as Download, C as Camera, R as RotateCcw, b as Check, c as Copy, d as ChevronDown, e as ChevronUp } from "../_libs/lucide-react.mjs";
import "fs";
import "../_libs/dijkstrajs.mjs";
import "../_libs/pngjs.mjs";
import "zlib";
import "assert";
import "buffer";
import "util";
import "stream";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "crypto";
import "async_hooks";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Tabs = Root2;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content.displayName;
const Card = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
      ...props
    }
  )
);
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const Select = Root2$1;
const SelectValue = Value;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger$1,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = Trigger$1.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Content2,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = Content2.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label$1,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = Label$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
    ]
  }
));
SelectItem.displayName = Item.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = Separator.displayName;
const Slider = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Root$1,
  {
    ref,
    className: cn("relative flex w-full touch-none select-none items-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Thumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = Root$1.displayName;
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const FORMATS = [{
  value: "text",
  label: "Text",
  icon: Type
}, {
  value: "url",
  label: "URL",
  icon: Link
}, {
  value: "wifi",
  label: "WiFi",
  icon: Wifi
}, {
  value: "email",
  label: "Email",
  icon: Mail
}, {
  value: "sms",
  label: "SMS",
  icon: MessageSquare
}, {
  value: "phone",
  label: "Phone",
  icon: Phone
}, {
  value: "vcard",
  label: "vCard",
  icon: User
}];
function escapeWifi(s) {
  return s.replace(/([\\;,":])/g, "\\$1");
}
function escapeVcard(s) {
  return s.replace(/([\\,;])/g, "\\$1").replace(/\n/g, "\\n");
}
function Generator() {
  const [format, setFormat] = reactExports.useState("url");
  const [text, setText] = reactExports.useState("https://lovable.dev");
  const [url, setUrl] = reactExports.useState("https://lovable.dev");
  const [wifi, setWifi] = reactExports.useState({
    ssid: "",
    password: "",
    encryption: "WPA",
    hidden: false
  });
  const [email, setEmail] = reactExports.useState({
    to: "",
    subject: "",
    body: ""
  });
  const [sms, setSms] = reactExports.useState({
    number: "",
    message: ""
  });
  const [phone, setPhone] = reactExports.useState("");
  const [vcard, setVcard] = reactExports.useState({
    firstName: "",
    lastName: "",
    org: "",
    title: "",
    phone: "",
    email: "",
    url: ""
  });
  const [size, setSize] = reactExports.useState(600);
  const [margin, setMargin] = reactExports.useState(2);
  const [ecc, setEcc] = reactExports.useState("H");
  const [fg, setFg] = reactExports.useState("#0a0a14");
  const [bg, setBg] = reactExports.useState("#ffffff");
  const [dataUrl, setDataUrl] = reactExports.useState("");
  const payload = (() => {
    switch (format) {
      case "text":
        return text;
      case "url":
        return url;
      case "wifi":
        if (!wifi.ssid) return "";
        return `WIFI:T:${wifi.encryption};S:${escapeWifi(wifi.ssid)};${wifi.encryption !== "nopass" ? `P:${escapeWifi(wifi.password)};` : ""}${wifi.hidden ? "H:true;" : ""};`;
      case "email":
        if (!email.to) return "";
        const params = new URLSearchParams();
        if (email.subject) params.set("subject", email.subject);
        if (email.body) params.set("body", email.body);
        const qs = params.toString();
        return `mailto:${email.to}${qs ? `?${qs}` : ""}`;
      case "sms":
        if (!sms.number) return "";
        return `SMSTO:${sms.number}:${sms.message}`;
      case "phone":
        return phone ? `tel:${phone}` : "";
      case "vcard":
        if (!vcard.firstName && !vcard.lastName) return "";
        return ["BEGIN:VCARD", "VERSION:3.0", `N:${escapeVcard(vcard.lastName)};${escapeVcard(vcard.firstName)}`, `FN:${escapeVcard(`${vcard.firstName} ${vcard.lastName}`.trim())}`, vcard.org && `ORG:${escapeVcard(vcard.org)}`, vcard.title && `TITLE:${escapeVcard(vcard.title)}`, vcard.phone && `TEL:${vcard.phone}`, vcard.email && `EMAIL:${vcard.email}`, vcard.url && `URL:${vcard.url}`, "END:VCARD"].filter(Boolean).join("\n");
    }
  })();
  reactExports.useEffect(() => {
    if (!payload?.trim()) {
      setDataUrl("");
      return;
    }
    QRCode.toDataURL(payload, {
      width: size,
      margin,
      errorCorrectionLevel: ecc,
      color: {
        dark: fg,
        light: bg
      }
    }).then(setDataUrl).catch(() => toast.error("Failed to generate QR code"));
  }, [payload, size, margin, ecc, fg, bg]);
  const download = () => {
    if (!dataUrl) return;
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `qrcode-${format}-${Date.now()}.png`;
    a.click();
    toast.success("QR code downloaded");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-2 block text-xs uppercase tracking-wider text-muted-foreground", children: "Format" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: FORMATS.map((f) => {
          const Icon2 = f.icon;
          const active = format === f.value;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setFormat(f.value), "aria-label": `Generate ${f.label} QR code`, "aria-pressed": active, className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background/40 text-muted-foreground hover:border-primary/50 hover:text-foreground"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
            f.label
          ] }, f.value);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        format === "text" && /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: text, onChange: (e) => setText(e.target.value), placeholder: "Enter any text…", className: "min-h-32 resize-none bg-background/40 font-mono text-sm" }),
        format === "url" && /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: url, onChange: (e) => setUrl(e.target.value), placeholder: "https://example.com", className: "bg-background/40 font-mono text-sm" }),
        format === "wifi" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Network name (SSID)", value: wifi.ssid, onChange: (e) => setWifi({
            ...wifi,
            ssid: e.target.value
          }), className: "bg-background/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Password", type: "password", value: wifi.password, onChange: (e) => setWifi({
            ...wifi,
            password: e.target.value
          }), disabled: wifi.encryption === "nopass", className: "bg-background/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: wifi.encryption, onValueChange: (v) => setWifi({
            ...wifi,
            encryption: v
          }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "aria-label": "WiFi encryption type", className: "bg-background/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "WPA", children: "WPA / WPA2 / WPA3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "WEP", children: "WEP" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "nopass", children: "No password" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: wifi.hidden, onChange: (e) => setWifi({
              ...wifi,
              hidden: e.target.checked
            }) }),
            "Hidden network"
          ] })
        ] }),
        format === "email" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Recipient email", value: email.to, onChange: (e) => setEmail({
            ...email,
            to: e.target.value
          }), className: "bg-background/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Subject (optional)", value: email.subject, onChange: (e) => setEmail({
            ...email,
            subject: e.target.value
          }), className: "bg-background/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Message (optional)", value: email.body, onChange: (e) => setEmail({
            ...email,
            body: e.target.value
          }), className: "min-h-20 resize-none bg-background/40" })
        ] }),
        format === "sms" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Phone number", value: sms.number, onChange: (e) => setSms({
            ...sms,
            number: e.target.value
          }), className: "bg-background/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Message", value: sms.message, onChange: (e) => setSms({
            ...sms,
            message: e.target.value
          }), className: "min-h-20 resize-none bg-background/40" })
        ] }),
        format === "phone" && /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "+1 555 000 0000", value: phone, onChange: (e) => setPhone(e.target.value), className: "bg-background/40" }),
        format === "vcard" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "First name", value: vcard.firstName, onChange: (e) => setVcard({
            ...vcard,
            firstName: e.target.value
          }), className: "bg-background/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Last name", value: vcard.lastName, onChange: (e) => setVcard({
            ...vcard,
            lastName: e.target.value
          }), className: "bg-background/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Organization", value: vcard.org, onChange: (e) => setVcard({
            ...vcard,
            org: e.target.value
          }), className: "bg-background/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Job title", value: vcard.title, onChange: (e) => setVcard({
            ...vcard,
            title: e.target.value
          }), className: "bg-background/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Phone", value: vcard.phone, onChange: (e) => setVcard({
            ...vcard,
            phone: e.target.value
          }), className: "bg-background/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Email", value: vcard.email, onChange: (e) => setVcard({
            ...vcard,
            email: e.target.value
          }), className: "bg-background/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Website", value: vcard.url, onChange: (e) => setVcard({
            ...vcard,
            url: e.target.value
          }), className: "col-span-2 bg-background/40" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "rounded-lg border border-border bg-background/30 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "cursor-pointer text-sm font-medium text-foreground", children: "Customize appearance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "mb-2 flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Size" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground", children: [
                size,
                "px"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { "aria-label": "QR code size in pixels", value: [size], min: 200, max: 1200, step: 50, onValueChange: (v) => setSize(v[0]) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "mb-2 flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Quiet zone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground", children: margin })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { "aria-label": "Quiet zone margin", value: [margin], min: 0, max: 8, step: 1, onValueChange: (v) => setMargin(v[0]) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-2 block text-xs text-muted-foreground", children: "Error correction" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: ecc, onValueChange: (v) => setEcc(v), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "aria-label": "Error correction level", className: "bg-background/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "L", children: "Low (~7%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "M", children: "Medium (~15%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Q", children: "Quartile (~25%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "H", children: "High (~30%)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-2 block text-xs text-muted-foreground", children: "Foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "color", "aria-label": "QR foreground color", value: fg, onChange: (e) => setFg(e.target.value), className: "h-9 w-full cursor-pointer rounded-md border border-border bg-transparent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-2 block text-xs text-muted-foreground", children: "Background" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "color", "aria-label": "QR background color", value: bg, onChange: (e) => setBg(e.target.value), className: "h-9 w-full cursor-pointer rounded-md border border-border bg-transparent" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: download, disabled: !dataUrl, size: "lg", className: "w-full font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
        "Download PNG"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border p-4 shadow-[var(--shadow-glow)]", style: {
      backgroundColor: bg
    }, children: dataUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: dataUrl, alt: `Generated ${format.toUpperCase()} QR code preview`, className: "h-full w-full" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center text-sm text-muted-foreground", children: "Fill in the form to generate" }) }) })
  ] });
}
function Scanner() {
  const [scanned, setScanned] = reactExports.useState("");
  const [qrDataUrl, setQrDataUrl] = reactExports.useState("");
  const [copied, setCopied] = reactExports.useState(false);
  const [scanning, setScanning] = reactExports.useState(false);
  const [cameras, setCameras] = reactExports.useState([]);
  const [activeCam, setActiveCam] = reactExports.useState("");
  const [zoomSupported, setZoomSupported] = reactExports.useState(false);
  const [currentZoom, setCurrentZoom] = reactExports.useState(1);
  const html5QrRef = reactExports.useRef(null);
  const overlayRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const trackRef = reactExports.useRef(null);
  const zoomCapsRef = reactExports.useRef(null);
  const zoomRef = reactExports.useRef(1);
  const lastDetectionRef = reactExports.useRef(0);
  const resetTimerRef = reactExports.useRef(null);
  const lockedRef = reactExports.useRef(false);
  const readerId = "qr-reader-region";
  const renderQr = reactExports.useCallback(async (data) => {
    setScanned(data);
    const url = await QRCode.toDataURL(data, {
      width: 600,
      margin: 2,
      errorCorrectionLevel: "H",
      color: {
        dark: "#0a0a14",
        light: "#ffffff"
      }
    });
    setQrDataUrl(url);
  }, []);
  const clearOverlay = reactExports.useCallback(() => {
    const canvas = overlayRef.current;
    if (!canvas) return;
    canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
  }, []);
  const drawBoundingBox = reactExports.useCallback((points, video) => {
    const canvas = overlayRef.current;
    const container = containerRef.current;
    if (!canvas || !container || points.length < 3) return;
    const rect = container.getBoundingClientRect();
    if (canvas.width !== rect.width) canvas.width = rect.width;
    if (canvas.height !== rect.height) canvas.height = rect.height;
    const vw = video.videoWidth;
    const vh = video.videoHeight;
    if (!vw || !vh) return;
    const scale = Math.max(rect.width / vw, rect.height / vh);
    const offX = (rect.width - vw * scale) / 2;
    const offY = (rect.height - vh * scale) / 2;
    const mapped = points.map((p) => ({
      x: p.x * scale + offX,
      y: p.y * scale + offY
    }));
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgb(74,222,128)";
    ctx.lineWidth = 4;
    ctx.shadowColor = "rgba(74,222,128,0.85)";
    ctx.shadowBlur = 14;
    ctx.beginPath();
    ctx.moveTo(mapped[0].x, mapped[0].y);
    for (let i = 1; i < mapped.length; i++) ctx.lineTo(mapped[i].x, mapped[i].y);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgb(74,222,128)";
    mapped.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
      ctx.fill();
    });
  }, []);
  const applyZoom = reactExports.useCallback(async (value) => {
    const track = trackRef.current;
    const caps = zoomCapsRef.current;
    if (!track || !caps) return;
    const clamped = Math.max(caps.min, Math.min(caps.max, value));
    try {
      await track.applyConstraints({
        advanced: [{
          zoom: clamped
        }]
      });
      zoomRef.current = clamped;
      setCurrentZoom(clamped);
    } catch (e) {
      console.warn("Zoom constraint failed", e);
    }
  }, []);
  const autoZoom = reactExports.useCallback(async (tl, tr, video) => {
    if (!zoomCapsRef.current) return;
    const qrWidth = Math.hypot(tr.x - tl.x, tr.y - tl.y);
    const frameWidth = video.videoWidth;
    if (!frameWidth) return;
    const ratio = qrWidth / frameWidth;
    if (ratio < 0.15) {
      const factor = 0.35 / Math.max(ratio, 0.01);
      const target = zoomRef.current * factor;
      const step = zoomCapsRef.current.step || 0.1;
      if (Math.abs(target - zoomRef.current) > step) {
        await applyZoom(target);
      }
    }
  }, [applyZoom]);
  const smoothResetZoom = reactExports.useCallback(async () => {
    if (!zoomCapsRef.current) return;
    const start = zoomRef.current;
    if (start <= 1.05) return;
    const steps = 8;
    for (let i = 1; i <= steps; i++) {
      const v = start + (1 - start) * (i / steps);
      await applyZoom(v);
      await new Promise((r) => setTimeout(r, 30));
    }
  }, [applyZoom]);
  const stopCamera = reactExports.useCallback(async () => {
    if (resetTimerRef.current) {
      window.clearInterval(resetTimerRef.current);
      resetTimerRef.current = null;
    }
    const inst = html5QrRef.current;
    if (inst) {
      try {
        await inst.stop();
        await inst.clear();
      } catch {
      }
      html5QrRef.current = null;
    }
    trackRef.current = null;
    zoomCapsRef.current = null;
    zoomRef.current = 1;
    setZoomSupported(false);
    setCurrentZoom(1);
    clearOverlay();
    setScanning(false);
  }, [clearOverlay]);
  const initTrackAndZoom = reactExports.useCallback(() => {
    const container = document.getElementById(readerId);
    const video = container?.querySelector("video");
    if (!video || !(video.srcObject instanceof MediaStream)) return;
    const track = video.srcObject.getVideoTracks()[0];
    if (!track) return;
    trackRef.current = track;
    const caps = track.getCapabilities?.() ?? {};
    if (caps.zoom && typeof caps.zoom.max === "number") {
      zoomCapsRef.current = {
        min: caps.zoom.min ?? 1,
        max: caps.zoom.max,
        step: caps.zoom.step ?? 0.1
      };
      zoomRef.current = 1;
      setZoomSupported(true);
      setCurrentZoom(1);
    } else {
      setZoomSupported(false);
    }
  }, []);
  const startCamera = reactExports.useCallback(async (cameraId) => {
    try {
      const devices = cameras.length ? cameras : (await Html5Qrcode.getCameras()).map((c) => ({
        id: c.id,
        label: c.label
      }));
      if (!cameras.length) setCameras(devices);
      const id = cameraId || activeCam || devices.find((d) => /back|rear|environment/i.test(d.label))?.id || devices[0]?.id;
      if (!id) {
        toast.error("No camera available");
        return;
      }
      setActiveCam(id);
      await stopCamera();
      lockedRef.current = false;
      const instance = new Html5Qrcode(readerId);
      html5QrRef.current = instance;
      await instance.start(id, {
        fps: 15,
        qrbox: {
          width: 240,
          height: 240
        }
      }, async (decoded, result) => {
        const container = document.getElementById(readerId);
        const video = container?.querySelector("video");
        const rp = result?.result?.resultPoints ?? [];
        let polygon = [];
        if (rp.length >= 3) {
          const [bl, tl, tr] = rp;
          const br = {
            x: tr.x + (bl.x - tl.x),
            y: tr.y + (bl.y - tl.y)
          };
          polygon = [tl, tr, br, bl];
        }
        if (video && polygon.length === 4) {
          drawBoundingBox(polygon, video);
          await autoZoom(polygon[0], polygon[1], video);
        }
        lastDetectionRef.current = Date.now();
        if (!lockedRef.current) {
          lockedRef.current = true;
          await renderQr(decoded);
          toast.success("QR code detected");
        }
      }, () => {
      });
      setScanning(true);
      setTimeout(() => initTrackAndZoom(), 500);
      resetTimerRef.current = window.setInterval(() => {
        const idleMs = Date.now() - lastDetectionRef.current;
        if (idleMs > 1500 && zoomRef.current > 1.05) {
          smoothResetZoom();
        }
        if (idleMs > 800) clearOverlay();
      }, 400);
    } catch (err) {
      toast.error("Could not start camera. Check permissions.");
      console.error(err);
    }
  }, [activeCam, cameras, renderQr, stopCamera, drawBoundingBox, autoZoom, initTrackAndZoom, smoothResetZoom, clearOverlay]);
  reactExports.useEffect(() => {
    startCamera();
    return () => {
      if (resetTimerRef.current) window.clearInterval(resetTimerRef.current);
      const inst = html5QrRef.current;
      if (inst) inst.stop().catch(() => {
      });
    };
  }, []);
  const scanAgain = reactExports.useCallback(async () => {
    setScanned("");
    setQrDataUrl("");
    setCopied(false);
    clearOverlay();
    lockedRef.current = false;
    if (!scanning) await startCamera();
  }, [clearOverlay, scanning, startCamera]);
  const download = () => {
    if (!qrDataUrl) return;
    const a = document.createElement("a");
    a.href = qrDataUrl;
    a.download = `scanned-qr-${Date.now()}.png`;
    a.click();
    toast.success("QR code downloaded");
  };
  const copy = async () => {
    await navigator.clipboard.writeText(scanned);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-black", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: readerId, className: "h-full w-full [&_video]:h-full [&_video]:w-full [&_video]:object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: overlayRef, className: "pointer-events-none absolute inset-0 h-full w-full" }),
        zoomSupported && currentZoom > 1.05 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-2 top-2 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur", children: [
          currentZoom.toFixed(1),
          "× zoom"
        ] }),
        !zoomSupported && scanning && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute bottom-2 left-2 right-2 rounded-md bg-black/60 px-2 py-1 text-center text-[10px] text-white/80 backdrop-blur", children: "Hardware zoom unavailable on this device" })
      ] }),
      cameras.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: activeCam, onValueChange: (v) => {
        setActiveCam(v);
        startCamera(v);
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "aria-label": "Select camera", className: "bg-background/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select camera" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: cameras.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c.id, children: c.label || `Camera ${c.id.slice(0, 6)}` }, c.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        scanning ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: stopCamera, variant: "secondary", className: "flex-1", children: "Stop" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => startCamera(), className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "mr-2 h-4 w-4" }),
          " Start camera"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: scanAgain, variant: "outline", className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "mr-2 h-4 w-4" }),
          " Scan again"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Decoded content" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: scanned, readOnly: true, placeholder: "Point your camera at a QR code…", className: "min-h-24 resize-none bg-background/40 pr-10 font-mono text-xs" }),
        scanned && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: copy, "aria-label": copied ? "Copied to clipboard" : "Copy decoded content", className: "absolute right-2 top-2 rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground", children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4", "aria-hidden": "true" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4", "aria-hidden": "true" }) })
      ] }),
      qrDataUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-white p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: qrDataUrl, alt: "Re-rendered scanned QR", className: "mx-auto h-40 w-40" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: download, disabled: !qrDataUrl, size: "lg", className: "w-full font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
        "Download QR Image"
      ] })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen", style: {
    backgroundImage: "var(--gradient-hero)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
          "Free · No sign-up · Runs in your browser"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl", children: "QR Forge — Free QR Code Generator & Scanner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg", children: "Generate QR codes for URLs, WiFi, vCard, email and more — or scan with your camera." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border bg-card/60 p-6 backdrop-blur md:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "generate", className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mx-auto mb-8 grid w-full max-w-sm grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "generate", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "mr-2 h-4 w-4" }),
            "Generate"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "scan", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ScanLine, { className: "mr-2 h-4 w-4" }),
            "Scan"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "generate", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Generator, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "scan", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scanner, {}) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-12 text-center text-xs text-muted-foreground", children: "Your data never leaves your device. All generation and scanning happens locally." })
    ] })
  ] });
}
export {
  Index as component
};
