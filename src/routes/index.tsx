import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useCallback, useEffect } from "react";
import QRCode from "qrcode";
import { Html5Qrcode } from "html5-qrcode";
import {
  QrCode,
  ScanLine,
  Download,
  Copy,
  Check,
  RotateCcw,
  Link as LinkIcon,
  Camera,
  Wifi,
  Mail,
  Phone,
  MessageSquare,
  User,
  Type,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
});

type Format = "text" | "url" | "wifi" | "email" | "sms" | "phone" | "vcard";

const FORMATS: { value: Format; label: string; icon: typeof Type }[] = [
  { value: "text", label: "Text", icon: Type },
  { value: "url", label: "URL", icon: LinkIcon },
  { value: "wifi", label: "WiFi", icon: Wifi },
  { value: "email", label: "Email", icon: Mail },
  { value: "sms", label: "SMS", icon: MessageSquare },
  { value: "phone", label: "Phone", icon: Phone },
  { value: "vcard", label: "vCard", icon: User },
];

function escapeWifi(s: string) {
  return s.replace(/([\\;,":])/g, "\\$1");
}
function escapeVcard(s: string) {
  return s.replace(/([\\,;])/g, "\\$1").replace(/\n/g, "\\n");
}

function Generator() {
  const [format, setFormat] = useState<Format>("url");
  const [text, setText] = useState("https://lovable.dev");
  const [url, setUrl] = useState("https://lovable.dev");
  const [wifi, setWifi] = useState({ ssid: "", password: "", encryption: "WPA", hidden: false });
  const [email, setEmail] = useState({ to: "", subject: "", body: "" });
  const [sms, setSms] = useState({ number: "", message: "" });
  const [phone, setPhone] = useState("");
  const [vcard, setVcard] = useState({
    firstName: "",
    lastName: "",
    org: "",
    title: "",
    phone: "",
    email: "",
    url: "",
  });

  const [size, setSize] = useState(600);
  const [margin, setMargin] = useState(2);
  const [ecc, setEcc] = useState<"L" | "M" | "Q" | "H">("H");
  const [fg, setFg] = useState("#0a0a14");
  const [bg, setBg] = useState("#ffffff");
  const [dataUrl, setDataUrl] = useState("");

  const payload = (() => {
    switch (format) {
      case "text":
        return text;
      case "url":
        return url;
      case "wifi":
        if (!wifi.ssid) return "";
        return `WIFI:T:${wifi.encryption};S:${escapeWifi(wifi.ssid)};${
          wifi.encryption !== "nopass" ? `P:${escapeWifi(wifi.password)};` : ""
        }${wifi.hidden ? "H:true;" : ""};`;
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
        return [
          "BEGIN:VCARD",
          "VERSION:3.0",
          `N:${escapeVcard(vcard.lastName)};${escapeVcard(vcard.firstName)}`,
          `FN:${escapeVcard(`${vcard.firstName} ${vcard.lastName}`.trim())}`,
          vcard.org && `ORG:${escapeVcard(vcard.org)}`,
          vcard.title && `TITLE:${escapeVcard(vcard.title)}`,
          vcard.phone && `TEL:${vcard.phone}`,
          vcard.email && `EMAIL:${vcard.email}`,
          vcard.url && `URL:${vcard.url}`,
          "END:VCARD",
        ]
          .filter(Boolean)
          .join("\n");
    }
  })();

  useEffect(() => {
    if (!payload?.trim()) {
      setDataUrl("");
      return;
    }
    QRCode.toDataURL(payload, {
      width: size,
      margin,
      errorCorrectionLevel: ecc,
      color: { dark: fg, light: bg },
    })
      .then(setDataUrl)
      .catch(() => toast.error("Failed to generate QR code"));
  }, [payload, size, margin, ecc, fg, bg]);

  const download = () => {
    if (!dataUrl) return;
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `qrcode-${format}-${Date.now()}.png`;
    a.click();
    toast.success("QR code downloaded");
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-5">
        <div>
          <Label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
            Format
          </Label>
          <div className="flex flex-wrap gap-1.5">
            {FORMATS.map((f) => {
              const Icon = f.icon;
              const active = format === f.value;
              return (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setFormat(f.value)}
                  aria-label={`Generate ${f.label} QR code`}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background/40 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          {format === "text" && (
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter any text…"
              className="min-h-32 resize-none bg-background/40 font-mono text-sm"
            />
          )}
          {format === "url" && (
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="bg-background/40 font-mono text-sm"
            />
          )}
          {format === "wifi" && (
            <div className="space-y-3">
              <Input
                placeholder="Network name (SSID)"
                value={wifi.ssid}
                onChange={(e) => setWifi({ ...wifi, ssid: e.target.value })}
                className="bg-background/40"
              />
              <Input
                placeholder="Password"
                type="password"
                value={wifi.password}
                onChange={(e) => setWifi({ ...wifi, password: e.target.value })}
                disabled={wifi.encryption === "nopass"}
                className="bg-background/40"
              />
              <Select
                value={wifi.encryption}
                onValueChange={(v) => setWifi({ ...wifi, encryption: v })}
              >
                <SelectTrigger aria-label="WiFi encryption type" className="bg-background/40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="WPA">WPA / WPA2 / WPA3</SelectItem>
                  <SelectItem value="WEP">WEP</SelectItem>
                  <SelectItem value="nopass">No password</SelectItem>
                </SelectContent>
              </Select>
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  checked={wifi.hidden}
                  onChange={(e) => setWifi({ ...wifi, hidden: e.target.checked })}
                />
                Hidden network
              </label>
            </div>
          )}
          {format === "email" && (
            <div className="space-y-3">
              <Input
                placeholder="Recipient email"
                value={email.to}
                onChange={(e) => setEmail({ ...email, to: e.target.value })}
                className="bg-background/40"
              />
              <Input
                placeholder="Subject (optional)"
                value={email.subject}
                onChange={(e) => setEmail({ ...email, subject: e.target.value })}
                className="bg-background/40"
              />
              <Textarea
                placeholder="Message (optional)"
                value={email.body}
                onChange={(e) => setEmail({ ...email, body: e.target.value })}
                className="min-h-20 resize-none bg-background/40"
              />
            </div>
          )}
          {format === "sms" && (
            <div className="space-y-3">
              <Input
                placeholder="Phone number"
                value={sms.number}
                onChange={(e) => setSms({ ...sms, number: e.target.value })}
                className="bg-background/40"
              />
              <Textarea
                placeholder="Message"
                value={sms.message}
                onChange={(e) => setSms({ ...sms, message: e.target.value })}
                className="min-h-20 resize-none bg-background/40"
              />
            </div>
          )}
          {format === "phone" && (
            <Input
              placeholder="+1 555 000 0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-background/40"
            />
          )}
          {format === "vcard" && (
            <div className="grid grid-cols-2 gap-3">
              <Input
                placeholder="First name"
                value={vcard.firstName}
                onChange={(e) => setVcard({ ...vcard, firstName: e.target.value })}
                className="bg-background/40"
              />
              <Input
                placeholder="Last name"
                value={vcard.lastName}
                onChange={(e) => setVcard({ ...vcard, lastName: e.target.value })}
                className="bg-background/40"
              />
              <Input
                placeholder="Organization"
                value={vcard.org}
                onChange={(e) => setVcard({ ...vcard, org: e.target.value })}
                className="bg-background/40"
              />
              <Input
                placeholder="Job title"
                value={vcard.title}
                onChange={(e) => setVcard({ ...vcard, title: e.target.value })}
                className="bg-background/40"
              />
              <Input
                placeholder="Phone"
                value={vcard.phone}
                onChange={(e) => setVcard({ ...vcard, phone: e.target.value })}
                className="bg-background/40"
              />
              <Input
                placeholder="Email"
                value={vcard.email}
                onChange={(e) => setVcard({ ...vcard, email: e.target.value })}
                className="bg-background/40"
              />
              <Input
                placeholder="Website"
                value={vcard.url}
                onChange={(e) => setVcard({ ...vcard, url: e.target.value })}
                className="col-span-2 bg-background/40"
              />
            </div>
          )}
        </div>

        <details className="rounded-lg border border-border bg-background/30 p-3">
          <summary className="cursor-pointer text-sm font-medium text-foreground">
            Customize appearance
          </summary>
          <div className="mt-4 space-y-4">
            <div>
              <Label className="mb-2 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Size</span>
                <span className="font-mono text-foreground">{size}px</span>
              </Label>
              <Slider
                aria-label="QR code size in pixels"
                value={[size]}
                min={200}
                max={1200}
                step={50}
                onValueChange={(v) => setSize(v[0])}
              />
            </div>
            <div>
              <Label className="mb-2 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Quiet zone</span>
                <span className="font-mono text-foreground">{margin}</span>
              </Label>
              <Slider
                aria-label="Quiet zone margin"
                value={[margin]}
                min={0}
                max={8}
                step={1}
                onValueChange={(v) => setMargin(v[0])}
              />
            </div>
            <div>
              <Label className="mb-2 block text-xs text-muted-foreground">Error correction</Label>
              <Select value={ecc} onValueChange={(v) => setEcc(v as typeof ecc)}>
                <SelectTrigger aria-label="Error correction level" className="bg-background/40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="L">Low (~7%)</SelectItem>
                  <SelectItem value="M">Medium (~15%)</SelectItem>
                  <SelectItem value="Q">Quartile (~25%)</SelectItem>
                  <SelectItem value="H">High (~30%)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="mb-2 block text-xs text-muted-foreground">Foreground</Label>
                <input
                  type="color"
                  aria-label="QR foreground color"
                  value={fg}
                  onChange={(e) => setFg(e.target.value)}
                  className="h-9 w-full cursor-pointer rounded-md border border-border bg-transparent"
                />
              </div>
              <div>
                <Label className="mb-2 block text-xs text-muted-foreground">Background</Label>
                <input
                  type="color"
                  aria-label="QR background color"
                  value={bg}
                  onChange={(e) => setBg(e.target.value)}
                  className="h-9 w-full cursor-pointer rounded-md border border-border bg-transparent"
                />
              </div>
            </div>
          </div>
        </details>

        <Button onClick={download} disabled={!dataUrl} size="lg" className="w-full font-semibold">
          <Download className="mr-2 h-4 w-4" />
          Download PNG
        </Button>
      </div>

      <div className="flex items-start justify-center">
        <div
          className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border p-4 shadow-[var(--shadow-glow)]"
          style={{ backgroundColor: bg }}
        >
          {dataUrl ? (
            <img
              src={dataUrl}
              alt={`Generated ${format.toUpperCase()} QR code preview`}
              className="h-full w-full"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
              Fill in the form to generate
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Scanner() {
  const [scanned, setScanned] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [cameras, setCameras] = useState<{ id: string; label: string }[]>([]);
  const [activeCam, setActiveCam] = useState<string>("");
  const [zoomSupported, setZoomSupported] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(1);
  const html5QrRef = useRef<Html5Qrcode | null>(null);
  const overlayRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<MediaStreamTrack | null>(null);
  const zoomCapsRef = useRef<{ min: number; max: number; step: number } | null>(null);
  const zoomRef = useRef<number>(1);
  const lastDetectionRef = useRef<number>(0);
  const resetTimerRef = useRef<number | null>(null);
  const lockedRef = useRef<boolean>(false);
  const readerId = "qr-reader-region";

  const renderQr = useCallback(async (data: string) => {
    setScanned(data);
    const url = await QRCode.toDataURL(data, {
      width: 600,
      margin: 2,
      errorCorrectionLevel: "H",
      color: { dark: "#0a0a14", light: "#ffffff" },
    });
    setQrDataUrl(url);
  }, []);

  const clearOverlay = useCallback(() => {
    const canvas = overlayRef.current;
    if (!canvas) return;
    canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  const drawBoundingBox = useCallback(
    (points: { x: number; y: number }[], video: HTMLVideoElement) => {
      const canvas = overlayRef.current;
      const container = containerRef.current;
      if (!canvas || !container || points.length < 3) return;

      const rect = container.getBoundingClientRect();
      if (canvas.width !== rect.width) canvas.width = rect.width;
      if (canvas.height !== rect.height) canvas.height = rect.height;

      const vw = video.videoWidth;
      const vh = video.videoHeight;
      if (!vw || !vh) return;

      // object-fit: cover mapping
      const scale = Math.max(rect.width / vw, rect.height / vh);
      const offX = (rect.width - vw * scale) / 2;
      const offY = (rect.height - vh * scale) / 2;
      const mapped = points.map((p) => ({
        x: p.x * scale + offX,
        y: p.y * scale + offY,
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
    },
    [],
  );

  const applyZoom = useCallback(async (value: number) => {
    const track = trackRef.current;
    const caps = zoomCapsRef.current;
    if (!track || !caps) return;
    const clamped = Math.max(caps.min, Math.min(caps.max, value));
    try {
      await track.applyConstraints({ advanced: [{ zoom: clamped } as never] });
      zoomRef.current = clamped;
      setCurrentZoom(clamped);
    } catch (e) {
      console.warn("Zoom constraint failed", e);
    }
  }, []);

  const autoZoom = useCallback(
    async (tl: { x: number; y: number }, tr: { x: number; y: number }, video: HTMLVideoElement) => {
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
    },
    [applyZoom],
  );

  const smoothResetZoom = useCallback(async () => {
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

  const stopCamera = useCallback(async () => {
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
        /* noop */
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

  const initTrackAndZoom = useCallback(() => {
    const container = document.getElementById(readerId);
    const video = container?.querySelector("video") as HTMLVideoElement | null;
    if (!video || !(video.srcObject instanceof MediaStream)) return;
    const track = video.srcObject.getVideoTracks()[0];
    if (!track) return;
    trackRef.current = track;
    const caps = (track.getCapabilities?.() ?? {}) as MediaTrackCapabilities & {
      zoom?: { min: number; max: number; step: number };
    };
    if (caps.zoom && typeof caps.zoom.max === "number") {
      zoomCapsRef.current = {
        min: caps.zoom.min ?? 1,
        max: caps.zoom.max,
        step: caps.zoom.step ?? 0.1,
      };
      zoomRef.current = 1;
      setZoomSupported(true);
      setCurrentZoom(1);
    } else {
      setZoomSupported(false);
    }
  }, []);

  const startCamera = useCallback(
    async (cameraId?: string) => {
      try {
        const devices = cameras.length
          ? cameras
          : (await Html5Qrcode.getCameras()).map((c) => ({ id: c.id, label: c.label }));
        if (!cameras.length) setCameras(devices);
        const id =
          cameraId ||
          activeCam ||
          devices.find((d) => /back|rear|environment/i.test(d.label))?.id ||
          devices[0]?.id;
        if (!id) {
          toast.error("No camera available");
          return;
        }
        setActiveCam(id);
        await stopCamera();
        lockedRef.current = false;
        const instance = new Html5Qrcode(readerId);
        html5QrRef.current = instance;
        await instance.start(
          id,
          { fps: 15, qrbox: { width: 240, height: 240 } },
          async (decoded, result) => {
            const container = document.getElementById(readerId);
            const video = container?.querySelector("video") as HTMLVideoElement | null;

            const rp =
              (result as unknown as { result?: { resultPoints?: { x: number; y: number }[] } })
                ?.result?.resultPoints ?? [];
            let polygon: { x: number; y: number }[] = [];
            if (rp.length >= 3) {
              // html5-qrcode/ZXing points: [bottomLeft, topLeft, topRight]
              const [bl, tl, tr] = rp;
              const br = { x: tr.x + (bl.x - tl.x), y: tr.y + (bl.y - tl.y) };
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
          },
          () => {},
        );
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
    },
    [
      activeCam,
      cameras,
      renderQr,
      stopCamera,
      drawBoundingBox,
      autoZoom,
      initTrackAndZoom,
      smoothResetZoom,
      clearOverlay,
    ],
  );

  // Auto-start camera on mount
  useEffect(() => {
    startCamera();
    return () => {
      if (resetTimerRef.current) window.clearInterval(resetTimerRef.current);
      const inst = html5QrRef.current;
      if (inst) inst.stop().catch(() => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scanAgain = useCallback(async () => {
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

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-3">
        <div
          ref={containerRef}
          className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-black"
        >
          <div
            id={readerId}
            className="h-full w-full [&_video]:h-full [&_video]:w-full [&_video]:object-cover"
          />
          <canvas ref={overlayRef} className="pointer-events-none absolute inset-0 h-full w-full" />
          {zoomSupported && currentZoom > 1.05 && (
            <div className="absolute right-2 top-2 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
              {currentZoom.toFixed(1)}× zoom
            </div>
          )}
          {!zoomSupported && scanning && (
            <div className="pointer-events-none absolute bottom-2 left-2 right-2 rounded-md bg-black/60 px-2 py-1 text-center text-[10px] text-white/80 backdrop-blur">
              Hardware zoom unavailable on this device
            </div>
          )}
        </div>
        {cameras.length > 1 && (
          <Select
            value={activeCam}
            onValueChange={(v) => {
              setActiveCam(v);
              startCamera(v);
            }}
          >
            <SelectTrigger aria-label="Select camera" className="bg-background/40">
              <SelectValue placeholder="Select camera" />
            </SelectTrigger>
            <SelectContent>
              {cameras.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.label || `Camera ${c.id.slice(0, 6)}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        <div className="flex gap-2">
          {scanning ? (
            <Button onClick={stopCamera} variant="secondary" className="flex-1">
              Stop
            </Button>
          ) : (
            <Button onClick={() => startCamera()} className="flex-1">
              <Camera className="mr-2 h-4 w-4" /> Start camera
            </Button>
          )}
          <Button onClick={scanAgain} variant="outline" className="flex-1">
            <RotateCcw className="mr-2 h-4 w-4" /> Scan again
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <Label className="text-xs uppercase tracking-wider text-muted-foreground">
          Decoded content
        </Label>
        <div className="relative">
          <Textarea
            value={scanned}
            readOnly
            placeholder="Point your camera at a QR code…"
            className="min-h-24 resize-none bg-background/40 pr-10 font-mono text-xs"
          />
          {scanned && (
            <button
              type="button"
              onClick={copy}
              aria-label={copied ? "Copied to clipboard" : "Copy decoded content"}
              className="absolute right-2 top-2 rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {copied ? (
                <Check className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Copy className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          )}
        </div>
        {qrDataUrl && (
          <div className="rounded-2xl border border-border bg-white p-3">
            <img src={qrDataUrl} alt="Re-rendered scanned QR" className="mx-auto h-40 w-40" />
          </div>
        )}
        <Button onClick={download} disabled={!qrDataUrl} size="lg" className="w-full font-semibold">
          <Download className="mr-2 h-4 w-4" />
          Download QR Image
        </Button>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <Toaster />
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-12 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Free · No sign-up · Runs in your browser
          </div>
          <h1 className="bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl">
            QR Forge — Free QR Code Generator &amp; Scanner
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            Generate QR codes for URLs, WiFi, vCard, email and more — or scan with your camera.
          </p>
        </header>

        <Card className="border-border bg-card/60 p-6 backdrop-blur md:p-10">
          <Tabs defaultValue="generate" className="w-full">
            <TabsList className="mx-auto mb-8 grid w-full max-w-sm grid-cols-2">
              <TabsTrigger value="generate">
                <QrCode className="mr-2 h-4 w-4" />
                Generate
              </TabsTrigger>
              <TabsTrigger value="scan">
                <ScanLine className="mr-2 h-4 w-4" />
                Scan
              </TabsTrigger>
            </TabsList>
            <TabsContent value="generate">
              <Generator />
            </TabsContent>
            <TabsContent value="scan">
              <Scanner />
            </TabsContent>
          </Tabs>
        </Card>

        <footer className="mt-12 text-center text-xs text-muted-foreground">
          Your data never leaves your device. All generation and scanning happens locally.
        </footer>
      </div>
    </main>
  );
}
