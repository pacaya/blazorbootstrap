﻿namespace BlazorBootstrap;

public partial class Callout : BlazorBootstrapComponentBase
{
    #region Methods

    private string GetHeading()
    {
        if (!string.IsNullOrWhiteSpace(Heading))
            return Heading;

        return Type switch
               {
                   CalloutType.Default => "NOTE",
                   CalloutType.Info => "INFO",
                   CalloutType.Warning => "WARNING",
                   CalloutType.Danger => "DANGER",
                   CalloutType.Tip or CalloutType.Success => "TIP",
                   _ => ""
               };
    }

    private IconName GetIconName() =>
        Type switch
        {
            CalloutType.Default => IconName.InfoCircleFill,
            CalloutType.Info => IconName.InfoCircleFill,
            CalloutType.Warning => IconName.ExclamationTriangleFill,
            CalloutType.Danger => IconName.Fire,
            CalloutType.Tip or CalloutType.Success => IconName.Lightbulb,
            _ => IconName.InfoCircleFill
        };

    #endregion

    #region Properties, Indexers

    private string CalloutHeadingCssClass => BootstrapClass.CalloutHeading;

    /// <summary>
    /// Specifies the content to be rendered inside this.
    /// </summary>
    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    protected override string? ClassNames =>
        new CssClassBuilder(Class)
            .AddClass(BootstrapClass.Callout)
            .AddClass(Type.ToCalloutTypeClass())
            .Build();

    private string heading => GetHeading();

    /// <summary>
    /// Gets or sets the callout heading.
    /// </summary>
    [Parameter]
    public string? Heading { get; set; }

    /// <summary>
    /// Gets or sets a value indicating whether to hide the callout heading.
    /// </summary>
    [Parameter]
    public bool HideHeading { get; set; }

    private IconName iconName => GetIconName();

    /// <summary>
    /// Gets or sets the callout color.
    /// </summary>
    [Parameter]
    public CalloutType Type { get; set; } = CalloutType.Default;

    #endregion
}
